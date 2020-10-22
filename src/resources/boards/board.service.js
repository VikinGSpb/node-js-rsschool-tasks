const boardsRepo = require('./board.db.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const create = board => boardsRepo.create(board);

const update = (id, boardFieldsForUpdate) =>
  boardsRepo.update(id, boardFieldsForUpdate);

const del = id => boardsRepo.del(id);

module.exports = { getAll, get, create, update, del };
