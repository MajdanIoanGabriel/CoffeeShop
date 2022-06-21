//  search.js
//
//  Defines the search api. Add to a server by calling:
//  require('./search')
'use strict';

//  Only export - adds the API to the app with the given options.
module.exports = (app, options) => {
app.get('/search', (req, res, next) => {

    // var name = req.query.name;
    // if (!name) {
    //   throw new Error("When searching for a coffee, the name must be specified, e.g: '/search?name=Espresso'.");
    // }

    // options.repository.getCoffeeByName(name).then((coffee) => {

    //   if(!coffee) { 
    //     res.status(404).send('Coffee not found.');
    //   } else {
    //     var result = '<ul><li>';
    //     result +=  coffee.coffee_name + ' - ' + coffee.price + '<br>' + coffee.category + '<br>' + coffee.coffee_description;
    //     result += '</ul></li>'

    //     res.status(200).send(result);
    //   }
    // })
    // .catch(next);
    res.status(200).send('/search');
  });
};
