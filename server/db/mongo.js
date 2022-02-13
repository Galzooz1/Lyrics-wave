const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/keys');

mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, { 
    authSource: "admin",
    retryWrites: true,
    dbName: "graphql",
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log("MongoDB connected!");
});

module.exports = db;