/**
 * Created by Guanyu on 7/6/16.
 */
CORE.Card = Base.extend(
    {
        constructor: function(param) {
            var that = this;
            this.param = param;
            var spec = {
                cls: 'card',
                cn: [
                    {
                        cls: 'frame',
                        id: '_frame'
                    },
                    {
                        cls: 'icon',
                        id: '_icon'
                    },
                    {
                        cls: 'hp number',
                        id: '_hp'
                    },
                    {
                        cls: 'attack number',
                        id: '_attack'
                    },
                    {
                        cls: 'cost number',
                        id: '_cost'
                    }
                ]
            };

            var dom = CORE.Dom.create(spec);
            this.ctrls = {};

            _.each(
                ['hp', 'attack', 'cost', 'icon', 'frame'],
                function(id) {
                    that.ctrls[id] = dom.querySelector('#_' + id);
                }
            );

            this.setCard(param.card || {});
            param.container.appendChild(dom);
        },

        setCard: function(card) {
            this.setHp(card.hp || 0);
            this.setAttack(card.attack || 0);
            this.setCost(card.cost || 0);
        },

        setHp: function(val) {
            this.setAttribute('hp', val);
        },
        setCost: function(val) {
            this.setAttribute('cost', val);
        },
        setAttack: function(val) {
            this.setAttribute('attack', val);
        },

        setAttribute: function(id, val) {
            if (_.contains(['hp', 'attack', 'cost'], id)) {
                this.ctrls[id].innerHTML = val.toString();
            }
        }
    },
    {
        hasCss: true,
        dependancies: []
    }
);