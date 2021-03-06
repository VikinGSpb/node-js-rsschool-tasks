const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards.map(Board.toResponse));
});

router.route('/:id').get(async (req, res) => {
  try {
    const board = await boardsService.get(req.params.id);
    res.json(Board.toResponse(board));
  } catch (e) {
    res.sendStatus(404).send('Not Found');
  }
});

router.route('/').post(async (req, res) => {
  const { title, columns } = req.body;
  const createdBoard = await boardsService.create(
    new Board({ title, columns })
  );
  res.json(Board.toResponse(createdBoard));
});

router.route('/:id').put(async (req, res) => {
  try {
    const updatedBoard = await boardsService.update(req.params.id, req.body);
    res.json(Board.toResponse(updatedBoard));
  } catch (e) {
    res.sendStatus(404).send('Not Found');
  }
});

router.route('/:id').delete(async (req, res) => {
  const deletedBoard = await boardsService.del(req.params.id);
  res.json(Board.toResponse(deletedBoard));
});

module.exports = router;
