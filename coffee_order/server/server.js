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
    require('../services/coffeecart')(app, options);
    require('../services/addtocart')(app, options);
    require('../services/removefromcart')(app, options);
    require('../services/totalprice')(app, options);

    app.get('/', (req, res, next) => {
      var result = "Welcome to the order section. Here you can go to:<ul> \
      <li>/coffeecart - see all coffees in the cart</li> \
      <li>/addtocart - add a coffee in the cart</li> \
      <li>/removefromcart - remove a coffee from the cart</li> \
      <li>/totalprice - see total price of the cart</li></ol>"

      res.status(200).send(result);
    });

    //  Start the app, creating a running server which we return.
    var server = app.listen(options.port, () => {
      resolve(server);
    });

  });
};