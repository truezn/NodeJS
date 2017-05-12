var express = require('express');
var router = express.Router();

router.get('/:name', function(req, res) {
    // res.send('hello, express with user ' + req.params.name);
    res.render('users', {
        name: req.params.name
    });
});

module.exports = router;