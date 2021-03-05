const { Router } = require("express");
const express = require("express");
const routing = express.Router();

routing.get("/", (req, res)=>{
    res.send("auth routing")
});

routing.get("/register",(req,res)=>{
    res.send("auth register routing")
});

module.exports = routing