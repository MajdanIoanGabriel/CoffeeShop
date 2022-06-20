//  coffeecart.js
//
//  Defines the coffeecart api. Add to a server by calling:
//  require('./coffeecart')
'use strict';

//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {

  app.get('/coffeecart', (req, res, next) => {
    options.repository.getCoffeeCart().then((coffeecart) => {
      
      if (coffeecart.length === 0) {
        res.status(200).send('Coffee cart is empty.');
      }
      else {
        var category = coffeecart[0].category;
        var result = category + '\n<ol>'

        for(const coffee of coffeecart) {
          if(!(category === coffee.category)) {
            category = coffee.category;
            result += '</ol><p>' + category + '</p><ol>';
          }

          result += '<li>'
          result +=  coffee.coffee_name + ' - ' + coffee.price;
          if(!(coffee.coffee_description === "")) {
            result +=  '<br>' + coffee.coffee_description;
          }
          result +=  '<br>Quantity: ' + coffee.quantity;
          result += '</li>'
        }
        result += '</ol>'

        res.status(200).send(result);
      }
    })
    .catch(next);
  });
};
