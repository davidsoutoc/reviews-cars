'use strict';

const createJsonError = require('../../errors/create-json-error');
const { findUserById } = require('../../repositories/users-repository');

async function getUserProfile(req, res) {
  try {
    const { id } = req.auth;
    const user = await findUserById(id);
    // const { name, email, image, createdAt } = user;
    // image='adsfasdf.png';
    // http://localhost:3000/public/profiles/adsfasdf.png
    res.status(200).send({ user });
    // res.status(200);
    // res.send({user});
  } catch (error) {
    createJsonError(error, res);
  }
}

module.exports = getUserProfile;