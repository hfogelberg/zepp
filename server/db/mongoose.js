var mongoose = require('mongoose'),
    bluebird = require('bluebird'),
    { IS_LOCAL } = require('../../config');

var dbUri = '';
console.log("Connecting to Db");

if (IS_LOCAL) {
    console.log('Hooking up to dev Db');
    dbUri = 'mongodb://localhost:27017/zepp'
} else {
    console.log('Hooking up to prod Db');
    // Todo
    dbUri = 'mongodb://localhost:27017/zepp';
}

console.log('Db connection to open: ' + dbUri);
mongoose.connect(dbUri);
mongoose.connection
    .once('open', () => { console.log('DB connection open'); })
    .on('error', (err) => { console.log('Error', err); });

mongoose.export = { mongoose };
