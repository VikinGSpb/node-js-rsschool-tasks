const User = require('./user.model');
const Task = require('../tasks/task.model');

const getAll = async () => User.find({});

const get = async id => User.findById(id);

const create = async user => User.create(user);

const update = async (id, userFieldsForUpdate) =>
  User.updateOne({ _id: id }, userFieldsForUpdate);

const del = async id => {
  const allTasks = await Task.find({});
  allTasks.forEach(async task => {
    if (id === task.userId) {
      task.userId = null;
      const updatedTask = await Task.updateOne({ _id: task.id }, task);
      return updatedTask;
    }
  });
  return User.deleteOne({ _id: id });
};

module.exports = { getAll, get, create, update, del };
