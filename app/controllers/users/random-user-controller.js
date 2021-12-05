'use strict';
const createJsonError = require('../../errors/create-json-error');
const { getRandomUser } = require('../../repositories/api-repository');

async function randomUser(req, res) {
  try {
    const randomUser = await getRandomUser();
    // Desestructuring usuario
    const [user] = randomUser.data.results;
    // Destructuring de los campos user;
    const { name, login, picture} = user;
    const { first, last } = name;
    const {username, email, password} = login;
    const { large } = picture;

    res.status(200);
    // Envio resultado
    res.send({
      name: `${first} ${last}`,
      username,
      password,
      email,
      photo: large,
    });
  } catch (error) {
    createJsonError(error, res);
  }
}

module.exports = randomUser;
