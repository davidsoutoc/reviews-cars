'use strict';

const Joi = require('joi');
const createJsonError = require('../../errors/create-json-error');
const throwJsonError = require('../../errors/throw-json-error');
const { isAdmin } = require('../../helpers/utils');
const { removeUserById, findUserById } = require('../../repositories/users-repository');

const schema = Joi.number().positive().required();

async function deleteUserById(req, res) {
  try {
    // Obtnemeos el role que se saco del JWT
    const { role } = req.auth; // En el req.auth tenemos { id: 1, name: admin, role: 'admin' }
    // Chequeamos si es administrador
    isAdmin(role);
    //DELETE /api/v1/users/45
    const { id } = req.params;
    await schema.validateAsync(id);
    // Obtenemos el usario a borrar
    const user = await findUserById(id);
    if (!user) {
      throwJsonError(400, 'Usuario no existe');
    }
    if (user.role === 'admin') {
      throwJsonError(403, 'No tienes permisos para realizar esta acción');
    }
    await removeUserById(id);

    res.status(204).send();
  } catch (error) {
    createJsonError(error, res);
  }
}
module.exports = deleteUserById;