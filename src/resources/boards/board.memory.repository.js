const DB = require('../../common/inMemoryDb');

const getAll = async () => await DB.getAllBoards();

const get = async id => await DB.getBoard(id);

const create = async board => await DB.createBoard(board);

const update = async (id, boardFieldsForUpdate) =>
  await DB.updateBoard(id, boardFieldsForUpdate);

const del = async id => await DB.deleteBoard(id);

module.exports = { getAll, get, create, update, del };
