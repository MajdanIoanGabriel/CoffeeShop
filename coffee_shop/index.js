//	index.js
//
//  Entrypoint to the application. Opens a repository to the MySQL
//  server and starts the server.
var server = require('./server/server');

//  Lots of verbose logging when we're starting up...
console.log("--- Customer Service---");
console.log("Connecting to customer repository...");

//  Log unhandled exceptions.
process.on('uncaughtException', function(err) {
  console.error('Unhandled Exception', err);
});
process.on('unhandledRejection', function(err, promise){
  console.error('Unhandled Rejection', err);
});

server.start({
    port: 80,
  }).then((app) => {
  console.log("Server started successfully, running on port " + 80 + ".");
  app.on('close', () => {
    console.log("Server on port " + 80 + " closed.");
  });
});