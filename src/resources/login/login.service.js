const jwt = require('jsonwebtoken');

const loginWithJWT = (login, password, users) => {
  let flag = false;
  let id;
  users.forEach(user => {
    if (user.login === login && user.password === password) {
      flag = true;
      id = user.id;
    }
  });
  if (!flag) {
    return undefined;
  }
  const payload = { userId: id, login };
  const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
    expiresIn: 10
  });
  return token;
};

module.exports = { loginWithJWT };
