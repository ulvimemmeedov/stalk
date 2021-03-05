const { Router } = require("express");
const express = require("express");
const routing = express.Router();

routing.get("/", (req, res)=>{
    res.send("questions routing")
});

routing.get("/delete",(req,res)=>{
    res.send("question delete routing")
});

module.exports = routing