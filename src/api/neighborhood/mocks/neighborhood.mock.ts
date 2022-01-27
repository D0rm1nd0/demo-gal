
export const EXPECTED_NEIGHBORS = [
    { id: 1, name: 'São Paulo' },
    { id: 2, name: 'Cotia' },
    { id: 3, name: 'Osasco' },
    { id: 4, name: 'Santo André' },
    { id: 5, name: 'Barueri' }
];

export const EXCPECTED_NEIGHBORHOOD = [
    { id: 1, name: 'Vila Boa Vista', parent_id: 5 },
    { id: 2, name: 'Agua Branca', parent_id: 1 },
    { id: 3, name: 'Moema', parent_id: 1 },
    { id: 4, name: 'Parque São Jorge', parent_id: 2 },
    { id: 5, name: 'Presidente Altini', parent_id: 3 },
    { id: 6, name: 'Utinga', parent_id: 4 },
    { id: 7, name: 'Barueri', parent_id: 5 }
]

export const EXPECTED_CITIES_FROM_CITY = [
    { id: 2, name: 'Agua Branca', parent_id: 1 },
    { id: 3, name: 'Moema', parent_id: 1 }
]
