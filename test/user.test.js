const request = require('supertest');


const app = require("../src/app");  // Importa o app

test('deve listar todos os usuários', () => {
    return request(app).get('/users')
        .then((res) => {
            expect(res.status).toBe(200);
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toHaveProperty('name', 'John Doe');
        });
});

test('deve inserir usuário com sucesso', () => {
    return request(app).post('/users')
        .send({
            name: 'Walter Mitty',
            email: 'walter@mail.com'
        })
        .then((res) => {
            expect(res.status).toBe(201);
            expect(res.body.name).toBe('Walter Mitty');
        });
}
);
