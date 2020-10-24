const mongoose = require('mongoose');
const uuid = require('uuid');

const taskSchema = new mongoose.Schema(
  {
    order: Number,
    title: String,
    description: String,
    boardId: String,
    columnId: String,
    userId: String,
    _id: {
      type: String,
      default: uuid
    }
  },
  { versionKey: false }
);

taskSchema.statics.toResponse = task => {
  const { id, title, order, description, columnId, userId, boardId } = task;
  return { id, title, order, description, columnId, userId, boardId };
};

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
