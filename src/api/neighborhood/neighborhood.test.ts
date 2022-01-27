import { EXCPECTED_NEIGHBORHOOD, EXPECTED_CITIES_FROM_CITY as EXPECTED_NEIGHBORHOOD_FROM_CITY } from "./mocks/neighborhood.mock"

const axios = require('axios');

const BASE_URL = "http://localhost"
const PORT = 3000


test("it should return status 200 and results", async () => {
    let res = await axios.get(`${BASE_URL}:${PORT}/api/neighborhood`);
    expect(res.status).toEqual(200);
    expect(res.data).toStrictEqual(EXCPECTED_NEIGHBORHOOD);
});

test("it should return the neighbborhood from city 1", async () => {
    let res = await axios.get(`${BASE_URL}:${PORT}/api/neighborhood/1`);
    expect(res.status).toEqual(200);
    expect(res.data).toStrictEqual(EXPECTED_NEIGHBORHOOD_FROM_CITY);
});

test("it should return all neighbborhoods", async () => {
    let res = await axios.get(`${BASE_URL}:${PORT}/api/neighborhood/anything`);
    expect(res.status).toEqual(200);
    expect(res.data).toStrictEqual(EXCPECTED_NEIGHBORHOOD);
});

test("it should return all neighbborhoods", async () => {
    try {
        await axios.get(`${BASE_URL}:${PORT}/api/neighborhood/anything/anything`);
    } catch (error) {
        expect(error.response.status).toEqual(404);
    }
});


