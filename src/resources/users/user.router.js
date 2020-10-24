const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

const bcrypt = require('bcrypt');
const saltRounds = 10;

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  res.json(User.toResponse(user));
});

router.route('/').post(async (req, res) => {
  const { login, password, name } = req.body;
  bcrypt.hash(password, saltRounds, async (err, hash) => {
    if (err) {
      throw err;
    }
    console.log(hash);
    const createdUser = await usersService.create(
      new User({ login, password: hash, name })
    );
    res.json(User.toResponse(createdUser));
  });
});

router.route('/:id').put(async (req, res) => {
  const updatedUser = await usersService.update(req.params.id, req.body);
  res.json(User.toResponse(updatedUser));
});

router.route('/:id').delete(async (req, res) => {
  const deletedUser = await usersService.del(req.params.id);
  res.json(deletedUser.ok);
});

module.exports = router;
