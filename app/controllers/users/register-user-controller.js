'use strict';
const Joi = require('joi');
const createJsonError = require('../../errors/create-json-error');
const throwJsonError = require('../../errors/throw-json-error.js');
const {
  createUser,
  findUserByEmail,
} = require('../../repositories/users-repository');
const schema = Joi.objects().keys({
  name: Joi.string().min(4).max(120).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(4).max(20).required(),
  verifyPassword: Joi.ref('password'),
});

async function registerUser(req, res) {
  try {
    const { body } = req;
    await schema.validateAsync(body);
    const { name, email, password } = body;
    const user = await findUserByEmail(email);
    if (user) {
      // const error = new Error('Ya existe un usuario con ese email');
      // error.status = 400; //409 - Conflict
      // throw error;
      // Este codigo de arriba se reemplaza por una funcion
      throwJsonError(400, 'Ya existe un usuario con ese email');
    }
    // Crear el Hash el password
    // Crear el verificationCode
    // Crear Object user con los campos
    // LLamamos a la base de datos - createUser
    // Enviar email de verificacion cuenta
    // res.send()
  } catch (error) {
    createJsonError(error, res);
  }
}

module.exports = registerUser;