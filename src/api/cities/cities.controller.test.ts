const axios = require('axios');

const BASE_URL = "http://localhost"
const PORT = 3000


const EXPECTED_CITIES = [
    { id: 1, name: 'São Paulo' },
    { id: 2, name: 'Cotia' },
    { id: 3, name: 'Osasco' },
    { id: 4, name: 'Santo André' },
    { id: 5, name: 'Barueri' }
];

test("it should return status 200 and results", async () => {
    let res = await axios.get(`${BASE_URL}:${PORT}/api/cities`);
    expect(res.status).toEqual(200);
    expect(res.data).toStrictEqual(EXPECTED_CITIES);
});
