import React from 'react';
import { Image } from 'react-native';

const menu = {
    hamburgers: [
        {
            name: `Queen's Burguer`,
            imgFile: require(`../images/queen's-burguer.jpg`),
            price: '17.00',
            ingredients: [
                'Pão Brioche',
                'Hambúrguer de 180g',
                'Tomate',
                'Alface Americana',
                'Queijo',
                'Maionese',
                'Lemon Pepper'
            ],
            discount: 15,
            main: false
        },
        {
            name: `Bad Style Burguer`,
            imgFile: require('../images/triplo-cebola.jpeg'),
            price: '19.00',
            ingredients: [
                'Pão Australiano',
                'Hambúrguer de 180g',
                'Cebola Caramelizada',
                'Alface Americana',
                'Queijo',
                'Maionese',
                'Tomate'            
            ],
            discount: 10,
            main: false
        },
        {
            name: `Manhattan Burguer`,
            imgFile: require('../images/manhattan-burguer.jpg'),
            price: '19.00',
            ingredients: [
                'Pão Cervejinha',
                'Hambúrguer de 180g',
                'Maionese',
                'Lemon Pepper',
                'Ovo',
                'Alface Americana',
                'Queijo',
                'Tomate'            
            ],
            discount: 12,
            main: true
        },
        {
            name: `Bronx Burguer`,
            imgFile: require('../images/triplo-cebola.jpeg'),
            price: '20.00',
            ingredients: [
                'Pão Australiano',
                'Hambúrguer de 180g',
                'Bacon',
                'Cheddar',
                'Queijo',
                'Maionese',  
            ],
            discount: 5,
            main: false
        },
        {
            name: `Brooklyn Burguer`,
            imgFile: require('../images/brooklyn-burguer.jpg'),
            price: '24.00',
            ingredients: [
                'Pão Cervejinha',
                'Hambúrguer de 180g',
                'Lemon Pepper',
                'Bacon',
                'Ovo',
                'Cebola Caramelizada',
                'Tomate',
                'Alface Americana',
                'Queijo',
                'Maionese'
            ],
            discount: 0,
            main: true
        },
        {
            name: `Hamburguer Vegano`,
            imgFile: require('../images/hamburguer-vegano.jpg'),
            price: '17.00',
            ingredients: [
                'Pão Brioche',
                'Hambúrguer de Grão de Bico',
                'Tomate',
                'Alface Americana',
                'Maionese Vegana',
                'Barbecue'
            ],
            discount: 0,
            main: false
        },
        {
            name: `Hamburguer de Costela`,
            imgFile: require('../images/burguer-pernil.jpg'),
            price: '20.00',
            ingredients: [
                'Pão Cervejinha',
                'Hambúrguer de 180g de costela',
                'Tomate',
                'Alface Americana',
                'Queijo',
                'Maionese',
                'Lemon Pepper'
            ],
            discount: 0,
            main: false
        },
        {
            name: `Grand Brooklyn`,
            imgFile: require('../images/grand-brooklyn.jpg'),
            price: '29.00',
            ingredients: [
                'Pão Brioche',
                '2 Hambúrgueres de 180g',
                'Tomate',
                'Alface Americana',
                'Queijo',
                'Bacon',
                'Ovo',
                'Cebola Caramelizada',
                'Maionese',
                'Lemon Pepper'
            ],
            discount: 0,
            main: true
        },
        {
            name: `Triplo Cebola`,
            imgFile: require('../images/triplo-cebola.jpeg'),
            price: '20.00',
            ingredients: [
                'Pão Brioche',
                'Hambúrguer de 180g',
                'Cebola Crispy',
                'Cebola Caramelizada',
                'Onion Rings',
                'Queijo',
                'Maionese',
                'Lemon Pepper'
            ],
            discount: 0,
            main: true
        }
    ],
    combos: [
        {
            name: 'Combos',
            imgFile: require('../images/combo.jpg'),
            price: null,
            ingredients: [
                `Qualquer Hambúrguer + R$ 7.00 = Burguer + Batata + Refri`
            ],
            discount: 0,
            main: false
        }
    ],
    portions: [
        {
            name: `Batata Palito`,
            imgFile: require('../images/batata-palito.jpg'),
            price: '18.00',
            ingredients: [
                `Porção de 350g. Acompanha molho barbecue.`
            ],
            discount: 0,
            main: false
        },
        {
            name: `Batata Rústica`,
            imgFile: require('../images/batata-rustica.jpg'),
            price: '18.00',
            ingredients: [
                `Porção de 350g. Acompanha Lemon Pepper.`
            ],
            discount: 0,
            main: false
        },
        {
            name: `Onion Rings`,
            imgFile: require('../images/onion-rings.jpg'),
            price: '18.00',
            ingredients: [
                `Porção de 350g. Acompanha molho barbecue.`
            ],
            discount: 0,
            main: false
        }
    ],
    sauces: [
        {
            name: `Lemon Pepper`,
            imgFile: require('../images/molho-lemon-pepper.jpg'),
            price: '3.00',
            ingredients: [
                `Raspas da casca do limão siciliano com um toque muito suave de pimenta.`
            ],
            discount: 0,
            main: false
        },
        {
            name: `Barbecue`,
            imgFile: require('../images/molho-barbecue.jpg'),
            price: '3.00',
            ingredients: [
                `Tradicional gostinho de churrasco e levement adocicado.`
            ],
            discount: 0,
            main: false
        },
        {
            name: `Cheddar`,
            imgFile: require('../images/molho-cheddar.png'),
            price: '3.00',
            ingredients: [
                `Uma variedade de queijo especial e bem tradicional.`
            ],
            discount: 0,
            main: false
        },
        {
            name: `Molho de Pimenta`,
            imgFile: require('../images/molho-pimenta.png'),
            price: '3.00',
            ingredients: [
                `Molho artesanal e mais picante.`
            ],
            discount: 0,
            main: false
        },
        {
            name: `Geleia de Pimenta`,
            imgFile: require('../images/geleia-pimenta.jpg'),
            price: '3.00',
            ingredients: [
                `Geleia apimentada e adocicada.`
            ],
            discount: 0,
            main: false
        }
    ],
    drinks: [
        {
            name: `Coca-Cola`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `350ml`
            ],
            imgFile: require('../images/coca-cola.webp'),
        },
        {
            name: `Dell Valle Uva`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `290ml`
            ],
            imgFile: require('../images/del-valle.webp'),
        },
        {
            name: `Água com Gás`,
            price: '3.50',
            discount: 0,
            main: false,
            ingredients: [
                `500ml`
            ],
            imgFile: require('../images/agua-gas.webp'),
        },
        {
            name: `Água sem Gás`,
            price: '3.50',
            discount: 0,
            main: false,
            ingredients: [
                `500ml`
            ],
            imgFile: require('../images/agua-sem-gas.webp'),
        },
        {
            name: `Sprite Lemon Fresh Garrafinha`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `510ml`
            ],
            imgFile: require('../images/sprite-lemon-fresh.webp'),
        },
        {
            name: `Fanta Uva`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `350ml`
            ],
            imgFile: require('../images/fanta-uva.webp'),
        },
        {
            name: `Fanta Guaraná`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `350ml`
            ],
            imgFile: require('../images/fanta-guarana.webp'),
        },
        {
            name: `Fanta Laranja`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `350ml`
            ],
            imgFile: require('../images/fanta-laranja.webp'),
        },
        {
            name: `Sprite`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `350ml`
            ],
            imgFile: require('../images/sprite.webp'),
        },
        {
            name: `Coca-Cola Zero`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `350ml`
            ],
            imgFile: require('../images/coca-cola-zero.webp'),
        },
        {
            name: `Schweppes Tônica`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `350ml`
            ],
            imgFile: require('../images/schweppes.webp'),
        },
        {
            name: `Schweppes Citrus`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `350ml`
            ],
            imgFile: require('../images/schweppes-citrus.webp'),
        },
        {
            name: `Mate Leão Limão`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `300ml`
            ],
            imgFile: require('../images/mate-leao-limao.webp'),
        },
        {
            name: `Mate Leão`,
            price: '5.50',
            discount: 0,
            main: false,
            ingredients: [
                `300ml`
            ],
            imgFile: require('../images/mate-leao.webp'),
        },
    ]
};

export default menu;