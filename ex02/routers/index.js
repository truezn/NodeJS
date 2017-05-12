var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.send('hello, express ning');
});

module.exports = router;