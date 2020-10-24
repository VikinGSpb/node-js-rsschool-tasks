const Board = require('./board.model');
const Task = require('../tasks/task.model');

const getAll = async () => Board.find({});

const get = async id => Board.findById(id);

const create = async board => Board.create(board);

const update = async (id, boardFieldsForUpdate) =>
  Board.updateOne({ _id: id }, boardFieldsForUpdate);

const del = async id => {
  const allTasks = await Task.find({});
  allTasks.forEach(async task => {
    if (task.boardId === id) {
      const taskDel = await Task.deleteOne({ _id: task.id });
      return taskDel;
    }
  });
  return Board.deleteOne({ _id: id });
};

module.exports = { getAll, get, create, update, del };
