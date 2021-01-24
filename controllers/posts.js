const Article = require('../models/article');

const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');

module.exports.getPosts = (req, res, next) => {
  Article.find({ owner: req.user._id })
    .then((posts) => {
      if (!posts) {
        throw new NotFoundError('Статьи не найдены');
      } else {
        res.send(posts);
      }
    })
    .catch(next);
};

module.exports.createPost = (req, res, next) => {
  const {
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
  } = req.body;
  Article.create({
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    owner: req.user._id,
  })
    .then((post) => {
      res.send(post);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Ошибка валидации. Введены некорректные данные'));
      }
      next(err);
    });
};

module.exports.deletePost = (req, res, next) => {
  console.log(req.params.articleId);
  Article.findByIdAndRemove(req.params.articleId)
    .then((post) => {
      if (!post) {
        throw new NotFoundError('Статья не найдена');
      } else {
        res.send(post);
      }
    })
    .catch(next);
};
