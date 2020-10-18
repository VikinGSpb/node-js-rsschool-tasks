const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const chalk = require('chalk');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

process.on('uncaughtException', error => {
  console.error(chalk.red(error.message));
});

process.on('unhandledRejection', reason => {
  console.error(chalk.red(reason.message));
});

app.use((req, res, next) => {
  const { body, query, method, url } = req;
  console.log('url ', chalk.green(url));
  console.log('query params ', query);
  console.log('request body ', body);
  console.log('method ', chalk.green(method));
  next();
});

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards/:id/tasks', taskRouter);

app.use((err, req, res, next) => {
  if (err) {
    console.error(chalk.red(err.message));
    res.sendStatus(500).send(err.message);
  }
  next();
});

module.exports = app;
