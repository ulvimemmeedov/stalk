const express = require('express');
const dotenv = require('dotenv')
const routers = require('./routing/index')
// mühit dəyişənləri
dotenv.config({
    path : "./config/env/config.env"
});
const app = express();
const PORT = process.env.PORT;
//api routing
app.use("/api",routers);

app.listen(PORT,()=>{
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});