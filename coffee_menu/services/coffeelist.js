//  coffeelist.js
//
//  Defines the coffeelist api. Add to a server by calling:
//  require('./coffeelist')
'use strict';

//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {

  app.get('/coffeelist', (req, res, next) => {
    options.repository.getCoffeeList().then((coffeelist) => {
      var category = coffeelist[0].category;
      var result = category + '\n<ol>'

      for(const coffee of coffeelist) {
        if(!(category === coffee.category)) {
          category = coffee.category;
          result += '</ol><p>' + category + '</p><ol>';
        }

        result += '<li>'
        result +=  coffee.coffee_name + ' - ' + coffee.price + '<br>' + coffee.coffee_description;
        result += '</li>'
      }
      result += '</ol>'

      res.status(200).send(result);
    })
    .catch(next);
  });
};
