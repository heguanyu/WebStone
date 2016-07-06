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
                        id: 'messages'
                    },
                    {
                        tag: 'form',
                        id: '_form',
                        cn: [
                            {
                                tag: "input",
                                id: 'm',
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

            var socket = io();
            form.setAttribute('action', '');

            $('form').submit(function(){
                socket.emit('chat message', $('#m').val());
                $('#m').val('');
                return false;
            });
            socket.on('chat message', function(msg){
                $('#messages').append($('<li>').text(msg));
            });

            param.container.appendChild(dom);
        }
    },
    {
        hasCss: true,
        dependancies: []
    }
);