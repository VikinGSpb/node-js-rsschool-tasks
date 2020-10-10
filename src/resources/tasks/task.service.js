const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();

const get = id => tasksRepo.get(id);

const create = task => tasksRepo.create(task);

const update = (id, taskFieldsForUpdate) =>
  tasksRepo.update(id, taskFieldsForUpdate);

const del = id => tasksRepo.del(id);

module.exports = { getAll, get, create, update, del };
