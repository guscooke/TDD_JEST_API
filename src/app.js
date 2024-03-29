const app = require('express')();

app.get('/', (req, res) => {
    res.status(200).send();
}
);

app.get('/users', (req, res) => {
    const users = [
        {
            name: 'John Doe', email: 'john@mail.com',
        }
    ];
    res.status(200).json(users);
}
);

app.post('/users', (req, res) => {
    res.status(201).json(req.body);
}
);

module.exports = app;

// Path: test/app.test.js