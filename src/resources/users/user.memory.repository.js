const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllUsers();

const get = async id => DB.getUser(id);

const create = async user => DB.createUser(user);

const update = async (id, userFieldsForUpdate) =>
  DB.updateUser(id, userFieldsForUpdate);

const del = async id => DB.deleteUser(id);

module.exports = { getAll, get, create, update, del };
