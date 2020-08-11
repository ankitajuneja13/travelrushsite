const express = require('express');
const app = express();
const PORT = process.env.PORT || 8083;
const bodyParser = require('body-parser');
const path = require('path');
const ejs = require('ejs');
const mongoose = require('mongoose');
const flash = require('express-flash');
const session = require('express-session');

const home = require('./routes/route');
const auth = require('./routes/auth');

//setting public folder
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true, parameterLimit: 1000000 }));
app.use(bodyParser.json());

app.use(flash());

app.use(session({
    secret: 'myproperty',
    resave: false,
    saveUninitialized: false,
}));


app.use(function(req, res, next) {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.use(home);
app.use(auth);

// //setting public folder
// app.use(express.static(__dirname + '/uploads'));

//setting view engine
app.set('view engine', 'ejs');
app.set('view engine', 'ejs');

//setting views folder for ejs
app.set('views', path.join(__dirname, 'views'));



//setting expressMongoDb
mongoose.connect('mongodb://mohit:mohit123@ds121182.mlab.com:21182/auth'); //coonectiong to the database url which is present at the config folder

const db = mongoose.connection;

mongoose.Promise = global.Promise; //implemented by me for promise handling

db.once('open', function() {
    console.log('connected db');
});

db.on('error', function(err) {
    if (err) console.log(err);
});

//setting up bodyparser middleware


//starting server
app.listen(PORT, function() {
    console.log(`Server running at port ${PORT} : http://127.0.0.1:${PORT}`)
});