//  coffeecart.js
//
//  Defines the coffeecart api. Add to a server by calling:
//  require('./coffeecart')
'use strict';

//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {

  app.get('/coffeecart', (req, res, next) => {
    options.repository.getCoffeeCart().then((coffelist) => {
      res.status(200).send(coffelist.map((coffee) => { return {
        coffee_name: coffee.coffee_name, 
        coffee_description: coffee.coffee_description,
        category: coffee.category, 
        price: coffee.price,
        quantity: coffee.quantity
        };
      }));
    })
    .catch(next);
  });
};
