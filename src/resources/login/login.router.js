const router = require('express').Router();
const usersService = require('../users/user.service');
const jwt = require('jsonwebtoken');

router.route('/').post(async (req, res) => {
  const { login, password } = req.body;
  const users = await usersService.getAll();
  let flag = false;
  let id;
  users.forEach(user => {
    if (user.login === login && user.password === password) {
      flag = true;
      id = user.id;
    }
  });
  if (!flag) {
    res
      .status(403)
      .send({ success: false, message: 'Bad username/password combination.' });
  } else {
    const payload = { userId: id, login };
    console.log(payload);
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: 10
    });
    res.send({ token });
    console.log(token);
  }
});

module.exports = router;
