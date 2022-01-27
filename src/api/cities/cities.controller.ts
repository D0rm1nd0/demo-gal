import { Request, Response } from 'express';

const CITIES = [
    { id: 1, name: 'São Paulo' },
    { id: 2, name: 'Cotia' },
    { id: 3, name: 'Osasco' },
    { id: 4, name: 'Santo André' },
    { id: 5, name: 'Barueri' }
];

export const getCities = (req: Request, res: Response) => {
    res.send(CITIES);
};