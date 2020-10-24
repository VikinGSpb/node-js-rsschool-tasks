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

// const uuid = require('uuid');

// class Task {
//   constructor({
//     id = uuid(),
//     title,
//     order,
//     description,
//     userId,
//     boardId,
//     columnId
//   } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//     this.description = description;
//     this.userId = userId;
//     this.boardId = boardId;
//     this.columnId = columnId;
//   }

//   static toResponse(task) {
//     const { id, title, order, description, userId, boardId, columnId } = task;
//     return { id, title, order, description, userId, boardId, columnId };
//   }
// }

// module.exports = Task;
