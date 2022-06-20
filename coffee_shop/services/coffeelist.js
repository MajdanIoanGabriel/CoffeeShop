//  coffeelist.js
//
//  Defines the coffeelist api. Add to a server by calling:
//  require('./coffeelist')
'use strict';

//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {

  app.get('/coffeelist', (req, res, next) => {
    options.repository.getCoffeeList().then((coffelist) => {
      res.status(200).send(coffelist.map((coffee) => { return {
        coffee_name: coffee.coffee_name, 
        coffee_description: coffee.coffee_description,
        category: coffee.category, 
        price: coffee.price
        };
      }));
    })
    .catch(next);
  });
};
