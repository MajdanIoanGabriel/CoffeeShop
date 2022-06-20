//  totalprice.js
//
//  Defines the totalprice api. Add to a server by calling:
//  require('./totalprice')
'use strict';

//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {

  app.get('/totalprice', (req, res, next) => {
    options.repository.getTotalPrice().then((result) => {
        console.log("Res: " + result);
        res.status(200).send('Checkout price: $' + result);
    })
    .catch(next);
  });
};
