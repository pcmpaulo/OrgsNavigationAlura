import logo from '../assets/employer-logo.png';
import tomate from '../assets/frutas/Tomate.png';
import brocolis from '../assets/frutas/Brócolis.png';
import batata from '../assets/frutas/Batata.png';
import pepino from '../assets/frutas/Pepino.png';
import abobora from '../assets/frutas/Abóbora.png';

const basket = {
  header: {
    title: 'Basket details',
  },
  details: {
    farmLogo: logo,
    basketName: 'Vegetables basket',
    farmName: 'Jack and Daniels Farm',
    description:
      'A basket with selected vegetables from a family farm on your region',
    price: '$ 40.00',
    buttonLabel: 'Buy now',
  },
  items: {
    title: 'Itens da cesta',
    productList: [
      {
        name: 'Tomate',
        image: tomate,
      },
      {
        name: 'Brócolis',
        image: brocolis,
      },
      {
        name: 'Batata',
        image: batata,
      },
      {
        name: 'Pepino',
        image: pepino,
      },
      {
        name: 'Abóbora',
        image: abobora,
      },
    ],
  },
};

export default basket;
