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

  getCoffeeList() {
    return new Promise((resolve, reject) => {

      this.connection.query('SELECT coffee_name, coffee_description, category, price FROM coffeemenu', (err, results) => {
        if(err) {
          return reject(new Error('An error occured getting the coffees: ' + err));
        }

        resolve((results || []).map((coffee) => {
          return {
            coffee_name: coffee.coffee_name, 
            coffee_description: coffee.coffee_description,
            category: coffee.category, 
            price: coffee.price
          };
        }));
      });

    });
  }

  getCoffeeByName(name) {

    return new Promise((resolve, reject) => {

      //  Fetch the coffee.
      this.connection.query('SELECT coffee_name, coffee_description, category, price FROM coffeemenu WHERE coffee_name = ?', [name], (err, results) => {

        if(err) {
          return reject(new Error('An error occured getting the user: ' + err));
        }

        if(results.length === 0) {
          resolve(undefined);
        } else {
          resolve({
            coffee_name: results[0].coffee_name, 
            coffee_description: results[0].coffee_description,
            category: results[0].category, 
            price: results[0].price
          });
          // resolve(results.map((coffee) => {
          //   return {
          //     coffee_name: coffee.coffee_name, 
          //     coffee_description: coffee.coffee_description,
          //     category: coffee.category, 
          //     price: coffee.price
          //   };
          // }));
        }

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
