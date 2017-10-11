const express = require('express')
const app = express();
const HelloController = require('./controllers/helloController');

app.get('/', function (req, res) {
  res.status(200).json( {body: HelloController.sayHello()});
});

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});