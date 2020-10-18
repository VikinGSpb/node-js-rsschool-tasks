const User = require('./user.model');

const getAll = async () => User.find({});

const get = async id => User.findById(id);

const create = async user => User.create(user);

const update = async (id, userFieldsForUpdate) =>
  User.updateOne({ _id: id }, userFieldsForUpdate);

const del = async id => User.deleteOne({ _id: id });

module.exports = { getAll, get, create, update, del };
