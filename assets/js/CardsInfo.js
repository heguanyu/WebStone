/**
 * Created by Guanyu on 7/6/16.
 */
CORE.CardInfo = Base.extend(
    {
        constructor: function(param) {
        }
    },
    {
        hasCss: false,
        dependancies: [],
        properties: {
            0: '',
            1: 'Murloc',
            2: 'Beast',
            3: 'Mech',
            4: 'Dragon',
            5: 'Demon',
            6: 'Totem'
        },
        cards: [
            {
                name: 'Murloc Raider',
                hp: 1,
                attack: 2,
                cost: 1,
                property: 1
            },
            {
                name: 'Taunting Bear',
                hp: 3,
                attack: 3,
                cost: 3,
                property: 2,
                taunt: true
            }
        ]
    }
);