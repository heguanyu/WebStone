CORE = {
    loadedModule: {}
};
CORE.loadModule = function(package, component) {
    var path = (package || "") + '/' + component;
    if (CORE.loadedModule[path]) {
        return;
    }
    CORE.loadedModule[path] = true;
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement("script");
    script.setAttribute("type", 'application/javascript');
    var src = (package || ".") + "/assets/js/" + component + ".js";
    script.setAttribute('src', src);
    script.onload = function() {
        if (CORE[component] && CORE[component]['hasCss']) {
            var css = document.createElement("link");
            css.setAttribute('rel', 'stylesheet');
            css.setAttribute('type', 'text/css');
            var src = (package || ".") + "/assets/css/" + component + ".css";
            css.setAttribute('href', src);
            head.appendChild(css);
        }

        if (CORE[component] && CORE[component]['dependancies']) {
            _.each(
                CORE[component]['dependancies'],
                function(dependent) {
                    if ( (typeof dependent) == "string") {
                        CORE.loadModule(package, dependent);
                    }
                    else {
                        CORE.loadModule(dependent.package, dependent.module);
                    }

                }
            )
        }
    }
    head.appendChild(script);
}
