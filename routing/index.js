const express = require('express');
const routing = express.Router();
const question = require('./question');
const auth = require('./auth');
routing.use("/questions",question); 
routing.use("/auth",auth);


module.exports = routing