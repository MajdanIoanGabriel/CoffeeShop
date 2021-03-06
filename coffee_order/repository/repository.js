//  repository.js
//
//  Exposes a single function - 'connect', which returns
//  a connected repository. Call 'disconnect' on this object when you're done.
'use strict';

var mysql = require('mysql');

//  Class which holds an open connection to a repository
//  and exposes some simple functions for accessing data.
class Repository {
  constructor(connectionSettings) {
    this.connectionSettings = connectionSettings;
    this.connection = mysql.createConnection(this.connectionSettings);
  }

  getCoffeeCart() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT coffee_name, coffee_description, category, price, quantity FROM coffeecart WHERE quantity > 0', (err, results) => {
        if(err) {
          return reject(new Error('An error occured getting the coffee cart: ' + err));
        }

        resolve((results || []).map((coffee) => {
          return {
            coffee_name: coffee.coffee_name, 
            coffee_description: coffee.coffee_description,
            category: coffee.category, 
            price: '$' + coffee.price,
            quantity: coffee.quantity
          };
        }));
      });

    });
  }

  addToCart(name, quantity) {

    return new Promise((resolve, reject) => {

      //  Fetch the coffee.
      this.connection.query('UPDATE coffeecart SET quantity = CASE WHEN quantity + ? > 0 THEN quantity + ? ELSE 0 END WHERE coffee_name = ?', [quantity, quantity, name], (err, results) => {

        if(err) {
          if(quantity > 0) {
            return reject(new Error('An error occured adding to the cart: ' + err));
          }
          else {
            return reject(new Error('An error occured removing from the cart: ' + err));
          }
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve(results);
        }

      });

    });
  }

  getTotalPrice() {

    return new Promise((resolve, reject) => {

      //  Fetch the total price.
      this.connection.query('SELECT CAST(SUM(price*quantity) AS DECIMAL(10,2)) AS total_price FROM coffeecart WHERE quantity > 0', (err, result) => {

        if(err) {
          return reject(new Error('An error occured getting the price: ' + err));
        }

        resolve(result[0].total_price || 0);
      });

    });
  }

  disconnect() {
    this.connection.end();
  }
}

//  One and only exported function, returns a connected repo.
module.exports.connect = (connectionSettings) => {
  return new Promise((resolve, reject) => {
    if(!connectionSettings.host) throw new Error("A host must be specified.");
    if(!connectionSettings.user) throw new Error("A user must be specified.");
    if(!connectionSettings.password) throw new Error("A password must be specified.");
    if(!connectionSettings.port) throw new Error("A port must be specified.");

    resolve(new Repository(connectionSettings));
  });
};
