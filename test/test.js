const assert = require('assert');
const HelloController = require('../controllers/helloController');

describe('GET /', function() {
    it('should respond with Hello World', function() {
        assert.equal(HelloController.sayHello(), "Greetings Planet!");
    });
});

