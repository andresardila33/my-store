const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const whitelist = ['http://localhost:8080, https://myapp.com'];
const options = {
    origin: (origin, cb) => {
        if (whitelist.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(newError('no permitido'));
        }
    }
};

app.use(cors());

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
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Mi port ${port}`);
});