const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const { PORT, DB_URL } = require('./configs'); // вынести порт в конфиг
const { limiter } = require('./configs/ratelimit');

const app = express();
const router = require('./router/index');

app.use(limiter);
app.use(helmet());
app.use(cors());

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
