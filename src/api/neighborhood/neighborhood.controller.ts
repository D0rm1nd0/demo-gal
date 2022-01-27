import { Request, Response } from 'express';

const NEIGHBORHOOD = [
    { id: 1, name: 'Vila Boa Vista', parent_id: 5 },
    { id: 2, name: 'Agua Branca', parent_id: 1 },
    { id: 3, name: 'Moema', parent_id: 1 },
    { id: 4, name: 'Parque São Jorge', parent_id: 2 },
    { id: 5, name: 'Presidente Altini', parent_id: 3 },
    { id: 6, name: 'Utinga', parent_id: 4 },
    { id: 7, name: 'Barueri', parent_id: 5 }
];

export const getNeighborhoods = (req: Request, res: Response) => {
    return res.send(NEIGHBORHOOD);
};

export const getNeighborhood = (req: Request, res: Response) => {
    const city_id: number = parseInt(req.params.city_id)

    if (!city_id) {
        return res.send(NEIGHBORHOOD);
    }

    const result = NEIGHBORHOOD.filter(item => item.parent_id === city_id)

    if (!result || !result?.length) {
        return res.status(404).send([])
    }
    return res.send(result);
};