//  server.js

var express = require('express');
var morgan = require('morgan');

module.exports.start = (options) => {

  return new Promise((resolve, reject) => {

    //  Make sure we have a repository and port provided.
    if(!options.repository) throw new Error("A server must be started with a connected repository.");
    if(!options.port) throw new Error("A server must be started with a port.");

    //  Create the app, add some logging.
    var app = express();
    app.use(morgan('dev'));

    //  Add the APIs to the app.
    require('../services/coffeelist')(app, options);
    require('../services/search')(app, options);

    app.get('/', (req, res, next) => {
      var result = "Welcome to the menu section. Here you can go to:<ul> \
      <li>/coffeelist - see all coffees in the menu</li> \
      <li>/search - search for a coffee by name</li></ol>"

      res.status(200).send(result);
    });

    //  Start the app, creating a running server which we return.
    var server = app.listen(options.port, () => {
      resolve(server);
    });

  });
};