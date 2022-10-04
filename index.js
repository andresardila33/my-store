const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3000;
const { logErrors, errorHandler } = require('./middlewares/error.handler');

app.use(express.json());

routerApi(app);

app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
    res.send('Hola, soy una nueva ruta');
});

app.get('/home', (req, res) => {
    res.send('Aqui encontraras nuestra página principal');
});

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Mi port ${port}`);
});