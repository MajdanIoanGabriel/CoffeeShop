//  search.js
//
//  Defines the search api. Add to a server by calling:
//  require('./addtocart')
'use strict';

//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {
app.get('/addtocart', (req, res, next) => {

    var name = req.query.name;
    var quantity = req.query.q || 1;

    if (!name) {
      throw new Error("When searching for a coffee, the name must be specified, e.g: '/addtocart?name=Espresso'.");
    }

    options.repository.addToCart(name, quantity).then((coffee) => {

      if(!coffee) { 
        res.status(404).send('Coffee not found.');
      } else {
        res.status(200).send(quantity + ' ' + name + ' added to cart.');
      }
    })
    .catch(next);

  });
};
