'use strict';

const Joi = require('joi');
const createJsonError = require('../../errors/create-json-error');
const throwJsonError = require('../../errors/throw-json-error');
const { isAdmin } = require('../../helpers/utils');
const {
  findCarByBrandAndModel,
  findCarById,
  updateCar
} = require('../../repositories/cars-repository');

const schemaId = Joi.number().positive().required();

// La diferencia con el PUT es que aki ningún campo es obligatorio
const schema = Joi.object().keys({
  brand: Joi.string().alphanum().min(3).max(20),
  model: Joi.string().alphanum().min(2).max(220),
  year: Joi
    .number()
    .integer()
    .positive()
    .min(1950)
    .max(new Date().getFullYear()),
  engine: Joi.string().valid('Diesel', 'Gasolina','Híbrido', 'Eléctrico'),
  cv: Joi.number().integer().positive().min(60).max(500)
});

async function patchCarById(req, res) {
  try {
    const { carId } = req.params;
    // 1. validar id
    await schemaId.validateAsync(carId);

    // 2. Recuperamos el role del JWT que viene en el Authorization
    const { role } = req.auth;
    // Comprobamos si es admin
    isAdmin(role);

    // 3. Validamos que existe el carId seleccionado
    const car = await findCarById(carId);
    if (!car) {
      throwJsonError(400, 'Coche no existe');
    }

    //Validamos el body
    const { body } = req;
    await schema.validateAsync(body);

    // Formamos el objeto car con los campos original y los nuevos
    // campos actualizados
    const updatedCar = {
      ...car,
      ...body,
    };

    // Actualizamos coche
    await updateCar(carId, updatedCar);

    res.status(200).send({ ...updatedCar });
  } catch (err) {
    createJsonError(err, res);
  }
}

module.exports = patchCarById;
