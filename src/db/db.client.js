const mongoose = require('mongoose');
const User = require('../resources/users/user.model');

const users = [
  new User({ name: 'admin', password: 'admin', login: 'admin' }),
  new User({ name: 'someUser', password: '12345', login: 'someUser' })
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
    cb();
  });
};

module.exports = { connectToDB };
