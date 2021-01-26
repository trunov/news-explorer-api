const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 30 * 60 * 1000, // 30 минут
  max: 100,
  message: 'Слишком много запросов с вашего IP-адреса. Попробуйте попытку через 30 мин.',
});

module.exports = { limiter };
