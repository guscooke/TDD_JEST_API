const app = require('express')();
const cosign = require('consign');

cosign({ cwd: 'src' })
    .include('config/middlewares.js')
    .then('routes')
    .then('config/routes.js')
    .into(app);

app.get('/', (req, res) => {
    res.status(200).send();
}
);



module.exports = app;

// Path: test/app.test.js