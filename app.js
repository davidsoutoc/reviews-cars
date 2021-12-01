'use strict';
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const { PORT } = process.env;
// Para poder subir ficheros/imagenes
app.use(fileUpload());
// Recibir datos como json en el body
app.use(express.json());
// CORS - dar permisos de acceso a otras urls
app.use(cors());
// Carpeta publica accessible desde la URL
app.use(express.static('public'));

const carsRouter = require('./app/routes/cars-routes');
const usersRouter = require('./app/routes/users-routes');

app.use('/api/v1/cars/', carsRouter);
app.use('/api/v1/users/', usersRouter);

app.listen(PORT, () => console.log(`Running ${PORT}`));