var path = require('path');
var express = require('express');
var app = express();
var indexRouter = require('./routers/index');
var usersRouter = require('./routers/users');



// app.get('/', function(req, res) {
//     res.send('hello, express ning');
// });

// app.get('/users/:name', function(req, res) {
//     res.send('hello, ' + req.params.name);
// }); 

app.set('views', path.join(__dirname, 'views')); // 设置存放模板文件的目录
app.set('view engine', 'ejs'); // 设置模板引擎为 ejs
app.use(function(req, res, next) {
    console.log('1');
    next(new Error('haha'));
});
app.use("/", indexRouter);
app.use("/users", usersRouter);
// self make the error message
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(3000);