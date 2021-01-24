const router = require('express').Router();
const posts = require('./posts');
const users = require('./users');

const {
  createUser,
  login,
} = require('../controllers/users');

const auth = require('../middlewares/auth');

router.post('/signin', login); // validateUserLogin

router.post('/signup', createUser); // validateUserSignup

router.use(auth);

router.use('/users', users);

router.use('/articles', posts);

router.all('*', (req, res) => {
  res.status(404).send('Not found');
});

router.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
  next();
});

module.exports = router;
