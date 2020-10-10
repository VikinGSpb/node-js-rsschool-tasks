const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllBoards();

const get = async id => DB.getBoard(id);

const create = async board => DB.createBoard(board);

const update = async (id, boardFieldsForUpdate) =>
  DB.updateBoard(id, boardFieldsForUpdate);

const del = async id => DB.deleteBoard(id);

module.exports = { getAll, get, create, update, del };
