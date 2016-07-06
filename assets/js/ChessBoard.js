/**
 * Created by Guanyu on 7/5/2016.
 */
CORE.ChessBoard = Base.extend(
    {
        constructor: function(param) {
            var that = this;
            this.param = param;
            var spec = {
                cls: 'chessBoard',
                cn: [
                    {
                        cls: 'background',
                        id: '_background'
                    },
                    {
                        cls: 'chatContainer',
                        id: '_chatContainer'
                    }
                ]
            };

            var dom = CORE.Dom.create(spec);

            var chatContainer = dom.querySelector('#_chatContainer');

            var chat = new CORE.Chat(
                {
                    container: chatContainer
                }
            );

            param.container.appendChild(dom);
        }
    },
    {
        hasCss: true,
        dependancies: ['Chat']
    }
);