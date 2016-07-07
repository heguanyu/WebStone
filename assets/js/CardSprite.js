/**
 * Created by Guanyu on 7/6/16.
 */
CORE.CardSprite = Base.extend(
    {
        constructor: function(param) {
            var that = this;
            this.param = param;
            var spec = {
                cls: 'cardSprite',
                cn: {
                    id: '_cardContainer'
                }
            };

            var dom = CORE.Dom.create(spec);

            var cardContainer = dom.querySelector('#_cardContainer');

            this.card = new CORE.Card(
                {
                    container: cardContainer,
                    card: param.card
                }
            );

            param.container.appendChild(dom);
        }
    },
    {
        hasCss: true,
        dependancies: ['Card']
    }
);