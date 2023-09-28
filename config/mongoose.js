const mongoose = require('mongoose');

// to manage connection of db
mongoose.connect(`mongodb://127.0.0.1:27017/Hospital  Database`);

const db = mongoose.connection;

// To Check Error 
db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;