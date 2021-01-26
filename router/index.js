const router = require('express').Router();
const {
  errors,
} = require('celebrate');

const posts = require('./posts');
const users = require('./users');

const {
  createUser,
  login,
} = require('../controllers/users');

const auth = require('../middlewares/auth');
const {
  validateUserLogin,
  validateUserSignup,
} = require('../middlewares/celebrateHandlers');

router.post('/signin', validateUserLogin, login);

router.post('/signup', validateUserSignup, createUser);

router.use(auth);

router.use('/users', users);

router.use('/articles', posts);

router.all('*', (req, res) => {
  res.status(404).send('Not found');
});

router.use(errors());

router.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
});

module.exports = router;
