const app = require('express')();

app.get('/users', (req, res) => res.send('Hello Users API'));

app.get('/users/:id', (req, res) => {
    console.log('/users/:id', req.params)
    res.send(req.params.id)
});

app.get('/users/test/:id', (req, res) => {
    console.log('/users/test/:id', req.params)
    res.send(req.params.id)
});

app.listen(3001, () => console.log(`Users API listening on port 3001!`));