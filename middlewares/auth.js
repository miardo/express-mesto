/* eslint-disable eol-last */
const jwt = require('jsonwebtoken');

const E401 = require('./E401');

module.exports = (req, res, next) => {
  const { NODE_ENV, JWT_SECRET } = process.env;

  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new E401('Необходима авторизация.'));
  }
  const token = authorization.replace('Bearer ', '');

  let payload;

  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new E401('Необходима авторизация.'));
  }

  req.user = payload;
  next();
};