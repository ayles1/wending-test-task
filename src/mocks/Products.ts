import cola from '../assets/cola.jpg';
import fanta from '../assets/fanta.jpg';
import kirieshki from '../assets/kirieshki.png';
import lays from '../assets/lays.jpg';
import snickers from '../assets/snickers.jpg';

export interface IProduct {
    name: string;
    price: number;
    amount: number;
    image?: string;
    id: string;
}

export const products: IProduct[] = [
    {
        amount: 2,
        name: 'Cola',
        price: 100,
        image: cola,
        id: Math.random().toString().slice(2, 4)
    },
    {
        amount: 5,
        name: 'Lays',
        price: 1000,
        image: lays,
        id: Math.random().toString().slice(2, 4)
    },
    {
        amount: 3,
        name: 'Fanta',
        price: 200,
        image: fanta,
        id: Math.random().toString().slice(2, 4)
    },
    {
        amount: 4,
        name: 'Snickers',
        price: 50,
        image: snickers,
        id: Math.random().toString().slice(2, 4)
    },
    {
        amount: 4,
        name: 'Kirieshki',
        price: 100,
        image: kirieshki,
        id: Math.random().toString().slice(2, 4)
    }
];
