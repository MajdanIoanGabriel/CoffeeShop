//  config.js
//
//  Simple application configuration. Extend as needed.
module.exports = {
	port: process.env.PORT || 8081,
  coffee_menu_db: {
    host: process.env.DATABASE_HOST || '127.0.0.1',
    database: 'coffeecart',
    user: 'coffee_client',
    password: '123',
    port: 3306
  }
};
