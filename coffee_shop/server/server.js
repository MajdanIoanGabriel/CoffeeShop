//  server.js

var express = require('express');
var expr_proxy = require('express-http-proxy');
var morgan = require('morgan');

module.exports.start = (options) => {

  return new Promise((resolve, reject) => {

    //  Make sure we have a port provided.
    if(!options.port) throw new Error("A server must be started with a port.");

    //  Create the app, add some logging.
    var app = express();
    app.use(morgan('dev'));

    //  Add the APIs to the app.
    app.use('/menu', expr_proxy('coffee_menu:8080'));
    app.use('/order', expr_proxy('coffee_order:8081'));

    app.get('/', (req, res, next) => {
      var result = "Welcome to the coffee shop. Here you can go to:<ul> \
      <li>/menu - see the coffee menu</li> \
      <li>/order - order some coffee</li></ul>";

      res.status(200).send(result);
    });

    //  Start the app, creating a running server which we return.
    var server = app.listen(options.port, () => {
      resolve(server);
    });

  });
};