'use strict';

const Joi = require('joi');
const createJsonError = require("../../errors/create-json-error");
const throwJsonError = require('../../errors/throw-json-error');
const { findCarById } = require('../../repositories/cars-repository');
const { getRating } = require('../../repositories/reviews-repository');
const schema = Joi.number().positive().integer().required();

async function getAverageRatingByCarId(req, res) {
  try {
    // Obtenemos el carId de la URL
    const { carId } = req.params;
    // Validamos el carId con Joi
    await schema.validateAsync(carId);
    // Comprobamos qu eel coche existe para ese carId
    const car = await findCarById(carId);
    if (!car) {
      throwJsonError(400, 'Coche no existe');
    }
    // Solución con 1 llamada a la base de datos
    const rating = await getRating(carId);

    res.status(200);
    res.send(rating);
    //res.send({ media, numValoraciones });
  } catch (error) {
    createJsonError(error, res);
  }
}

module.exports = getAverageRatingByCarId;