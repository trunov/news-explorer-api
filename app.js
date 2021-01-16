const express = require("express");
const bodyParser = require("body-parser");

const { PORT = 3000 } = process.env;

const app = express();

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Hello World !");
}); 

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})