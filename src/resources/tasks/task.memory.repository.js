const DB = require('../../common/inMemoryDb');

const getAll = async () => await DB.getAllTasks();

const get = async id => await DB.getTask(id);

const create = async task => await DB.createTask(task);

const update = async (id, taskFieldsForUpdate) =>
  await DB.updateTask(id, taskFieldsForUpdate);

const del = async id => await DB.deleteTask(id);

module.exports = { getAll, get, create, update, del };
