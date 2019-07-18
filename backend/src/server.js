const express = require('express');
const cors = require('cors');
const server = express();

//setting
server.set('port', process.env.PORT || 4000);

//middleware
server.use(cors());
server.use(express.json());

//routes
server.use('/api/users', require('./routes/users'));
server.use('/api/notes', require('./routes/notes'));


module.exports = server;