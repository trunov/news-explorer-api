const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { PORT = 3000 } = process.env; // вынести порт в конфиг

const app = express();

mongoose.connect('mongodb://localhost:27017/mydb', { // вынести название дб в конфиг
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World !');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
