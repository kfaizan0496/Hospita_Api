const mongoose = require('mongoose');

// connect to   Database....
// mongoose.connect(`mongodb://127.0.0.1:27017/Hospital_Database`);
const url='mongodb+srv://kfaizan472:049632@cluster0.ofndbte.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url,{
  serverSelectionTimeoutMS: 10000,
});


const db = mongoose.connection;

// To Check Error 
db.on('error', console.error.bind(console, 'Error connecting to the db'));

db.once('open', function () {
  console.log("Successfully connected to the Database");
});

module.exports = db;