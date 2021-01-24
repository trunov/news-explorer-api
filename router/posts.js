const router = require('express').Router();

const {
  getPosts,
  createPost,
  deletePost,
} = require('../controllers/posts');

router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:articleId', deletePost);

module.exports = router;
