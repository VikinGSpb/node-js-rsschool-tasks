const Board = require('./board.model');

const getAll = async () => Board.find({});

const get = async id => Board.findById(id);

const create = async board => Board.create(board);

const update = async (id, boardFieldsForUpdate) =>
  Board.updateOne({ _id: id }, boardFieldsForUpdate);

const del = async id => Board.deleteOne({ _id: id });

module.exports = { getAll, get, create, update, del };
