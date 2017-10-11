const express = require('express')
const app = express();
const HelloController = require('./controllers/helloController');

app.get('/', function (req, res) {
  res.status(200).json( {body: HelloController.sayHello()});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});