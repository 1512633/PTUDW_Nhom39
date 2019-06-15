var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var path = require('path');
var morgan = require('morgan');

var homeController= require('./controllers/homeController');



var app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    layoutsDir: 'views/_layouts/',
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');

app.use(express.static(
    path.resolve(__dirname, 'public')
));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    res.redirect('/home');
});

app.use('/home', homeController);

app.listen(3000, () => {
    console.log('server running on port 3000');
});
