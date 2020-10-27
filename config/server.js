/**Import Framework express */
var express = require('express');

/**Import Consign */
var consign = require('consign');

/**Import bodyParser */
var bodyParser = require('body-parser');

/**iniciar express */

var app = express();


/** egine views*/
app.set('view engine', 'ejs');
app.set('views', './app/views');


/**middleware static */
app.use(express.static('./app/public'));

/**middleware body-parser */
app.use(bodyParser.urlencoded({extended:true}));

/**Consig autoload*/
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

/**export objeto app */
module.exports = app;
