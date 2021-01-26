const router = require('express').Router();

const {
  getPosts,
  createPost,
  deletePost,
} = require('../controllers/posts');

const {
  validatePost,
  validateArticleId,
} = require('../middlewares/celebrateHandlers');

router.get('/', getPosts);
router.post('/', validatePost, createPost);
router.delete('/:articleId', validateArticleId, deletePost);

module.exports = router;
