const express = require('express');
const app = express();
const PORT = 4000;

const middlewares = require('./middlewares');
const routes = require('./routes');

const bodyParser = require('body-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();
middlewares.setupApp(app);
routes.setup(app);




app.listen(PORT, () => {
    console.log(`Servidor en ejecucion http://localhost${PORT}`);
})