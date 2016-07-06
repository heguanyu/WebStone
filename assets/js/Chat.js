/**
 * Created by Guanyu on 7/5/2016.
 */
CORE.Chat = Base.extend(
    {
        constructor: function(param) {
            var that = this;
            this.param = param;
            var spec = {
                cls: 'chat',
                cn: [
                    {
                        tag: 'ul',
                        id: '_messages'
                    },
                    {
                        tag: 'form',
                        id: '_form',
                        cn: [
                            {
                                tag: "input",
                                id: '_input',
                                autocomplete: 'off',
                            },
                            {
                                tag: 'button',
                                cn: 'Send'
                            }
                        ]
                    }
                ]
            };

            var dom = CORE.Dom.create(spec);
            var form = dom.querySelector('#_form');
            var messages = dom.querySelector('#_messages');
            var input = dom.querySelector('#_input');

            var socket = io();
            form.setAttribute('action', '');

            $(form).submit(function(){
                if (input.value.trim() != "") {
                    socket.emit('sendMessage', input.value);
                    input.value = "";
                }
                return false;
            });
            socket.on('broadcastMessage', function(msg){
                $(messages).append($('<li>').text(msg));
            });

            param.container.appendChild(dom);
        }
    },
    {
        hasCss: true,
        dependancies: []
    }
);