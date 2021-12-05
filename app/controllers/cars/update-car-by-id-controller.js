'use strict';

const Joi = require('joi');
const createJsonError = require('../../errors/create-json-error');
const throwJsonError = require('../../errors/throw-json-error');
const { isAdmin } = require('../../helpers/utils');
const {
  findCarById,
  updateCar
} = require('../../repositories/cars-repository');

const schemaId = Joi.number().positive().required();

const schema = Joi.object().keys({
  brand: Joi.string().min(3).max(20).required(),
  model: Joi.string().min(2).max(220).required(),
  year: Joi
    .number()
    .integer()
    .positive()
    .min(1950)
    .max(new Date().getFullYear()),
  engine: Joi.string().valid('Diesel', 'Gasolina','Híbrido', 'Eléctrico'),
  cv: Joi.number().integer().positive().min(60).max(500)
});

async function updateCarById(req, res) {
  try {
    // Obtenemos el carId, name de variable puesto en el cars-routes.js
    const { carId } = req.params;
    // Validamos el idCar
    await schemaId.validateAsync(carId);

    // Recuperamos el role del JWT que viene en el Authorization
    const { role } = req.auth;
    // Comprobamos el role
    isAdmin(role);

    // Comprobamos que exites el coche
    const car = await findCarById(carId);
    if( !car ) {
      throwJsonError(400, 'Coche no existe');
    }
    // Cogemos del body el objeto con los cambios
    const { body } = req;
    // Validamos el body
    await schema.validateAsync(body);

    // Actualizamos el coche
    await updateCar(carId, body);

    // Devolvemos que todo fue bien con un 204 - NO CONTENT
    res.status(204)
    res.end();
  } catch(error) {
    createJsonError(error, res);
  }
}

module.exports = updateCarById;
