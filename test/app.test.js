const request = require('supertest');

const app = require("../src/app");  // Importa o app

test('deve responder na raiz', async () => {
    const res = await request(app).get('/');
    return expect(res.status).toBe(200);
});