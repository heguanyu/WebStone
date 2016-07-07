/**
 * Created by Guanyu on 7/5/2016.
 */
CORE.HandCards = Base.extend(
    {
        constructor: function(param) {
            var that = this;
            this.param = param;
            var spec = {
                cls: 'handCards',
                cn: [
                    {
                        id: '_cardsContainer'
                    }
                ]
            };

            var dom = CORE.Dom.create(spec);

            this.cardsContainer = dom.querySelector('#_cardsContainer');

            this.cards = [];

            param.container.appendChild(dom);
        },

        addCard: function(id) {
            if (!CORE.CardInfo.cards[id]) {
                return;
            }
            this.cards.push(_.clone(CORE.CardInfo.cards[id]));
            this.render();
        },

        render: function() {
            this.cardSprites = [];
            this.cardsContainer.innerHTML = "";
            var that = this;
            var l = this.cards.length;
            var maxRotate = 30;
            var totalWidth = 80 + (l / 10) * 60;

            _.each(
                this.cards,
                function(card, idx) {
                    var iidx = idx / (l+1);
                    var wrap = CORE.Dom.create({
                        cls: 'wrap',
                        style: {
                            left: ((iidx*totalWidth) + 'px'),
                            transform: ("rotate(" + (2*iidx-1)*maxRotate + "deg)")
                        }
                    });
                    var cardSprite = new CORE.CardSprite(
                        {
                            container: wrap,
                            card: card
                        }
                    );
                    that.cardsContainer.appendChild(wrap);
                    that.cardSprites.push({
                        wrap: wrap,
                        sprite: cardSprite
                    });
                }
            );
        }
    },
    {
        hasCss: true,
        dependancies: ['CardSprite', 'CardsInfo']
    }
);