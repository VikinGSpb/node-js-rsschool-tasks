const router = require('express').Router();
const usersService = require('../users/user.service');
const loginService = require('./login.service');

router.route('/').post(async (req, res) => {
  const { login, password } = req.body;
  const users = await usersService.getAll();
  const token = await loginService.loginWithJWT(login, password, users);
  if (!token) {
    res
      .status(403)
      .send({ success: false, message: 'Bad username/password combination.' });
  } else {
    res.send({ token });
  }
});

module.exports = router;
