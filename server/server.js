const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      port = process.env.PORT || 3000,
      logger = require('morgan'),
      mongoose = require('./db/mongoose'),
      settings = require('../config'),
      axios = require('axios'),
      {api} = require('./api/api');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(__dirname + '/'));
api(app, mongoose);

app.listen(port, () => {
    console.log("Listening on port: " + port);
});
