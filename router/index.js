const router = require('express').Router();
const posts = require('./posts');

router.get('/hello', (req, res) => {
  res.send('Hello World !');
});

router.use('/posts', posts);
// - авторизация (signin/signup)

// auth (check JWT)

// route for 404 error
module.exports = router;
