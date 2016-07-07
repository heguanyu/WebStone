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
                        cls: 'playGround',
                        cn: [

                            {
                                cls: 'handCardsContainer',
                                id: '_handCardsContainer'
                            }
                        ]
                    },
                    {
                        cls: 'chatContainer',
                        id: '_chatContainer'
                    }
                ]
            };

            var dom = CORE.Dom.create(spec);

            var chatContainer = dom.querySelector('#_chatContainer');
            var handCardsContainer = dom.querySelector('#_handCardsContainer');

            var chat = new CORE.Chat(
                {
                    container: chatContainer
                }
            );

            this.handCards = new CORE.HandCards(
                {
                    container: handCardsContainer
                }
            );

            this.init();

            param.container.appendChild(dom);
        },

        init: function() {
            this.handCards.addCard(0);
            this.handCards.addCard(0);
            this.handCards.addCard(1);
        }
    },
    {
        hasCss: true,
        dependancies: ['Chat', 'HandCards']
    }
);