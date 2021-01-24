const jwt = require('jsonwebtoken');
const UnauthError = require('../errors/UnauthError');

const { JWT_SECRET } = require('../configs');

module.exports = (req, res, next) => {
  // достаём авторизационный заголовок
  const { authorization } = req.headers;

  // убеждаемся, что он есть или начинается с Bearer
  if (!authorization || !authorization.startsWith('Bearer ')) {
    throw new UnauthError('Необходима авторизация');
  }

  const token = authorization.replace('Bearer ', '');
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    throw new UnauthError('Необходима авторизация');
  }
  req.user = payload;
  next();
};
