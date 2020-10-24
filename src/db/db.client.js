const mongoose = require('mongoose');
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');

const users = [new User({ name: 'admin', password: 'admin', login: 'admin' })];

const boards = [
  new Board({
    title: 'first',
    columns: [
      { title: 'first', order: 0 },
      { title: 'second', order: 1 }
    ]
  }),
  new Board({
    title: 'second',
    columns: [
      { title: 'first', order: 0 },
      { title: 'second', order: 1 }
    ]
  })
];

const connectToDB = cb => {
  mongoose.connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('We are connected!');
    db.dropDatabase();
    users.forEach(user => user.save());
    boards.forEach(board => board.save());
    cb();
  });
};

module.exports = { connectToDB };
