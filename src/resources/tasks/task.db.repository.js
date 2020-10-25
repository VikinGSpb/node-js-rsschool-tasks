const Task = require('./task.model');

const getAll = async () => Task.find({});

const get = async id => Task.findById(id);

const create = async board => Task.create(board);

const update = async (id, taskFieldsForUpdate) =>
  Task.updateOne({ _id: id }, taskFieldsForUpdate);

const del = async id => Task.deleteOne({ _id: id });

module.exports = { getAll, get, create, update, del };
