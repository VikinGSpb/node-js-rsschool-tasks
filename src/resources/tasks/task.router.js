const router = require('express').Router();
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  res.json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const task = await tasksService.get(req.params.id);
    res.json(Task.toResponse(task));
  } catch (e) {
    res.sendStatus(404).send('Not found');
  }
});

router.route('/').post(async (req, res) => {
  const { title, order, description, userId, columnId } = req.body;
  const boardId = req.body.boardId || req.baseUrl.split('/')[2];
  const createdTask = await tasksService.create(
    new Task({ title, order, description, userId, boardId, columnId })
  );
  res.json(Task.toResponse(createdTask));
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedTask = await tasksService.update(req.params.id, req.body);
    res.json(Task.toResponse(updatedTask));
  } catch (e) {
    res.sendStatus(404).send('Not Found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const deletedTask = await tasksService.del(req.params.id);
  res.json(Task.toResponse(deletedTask));
});

module.exports = router;
