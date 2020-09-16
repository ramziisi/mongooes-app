const express = require('express');
const bd=require("./base");
const app= express();
app.use(express.json());
bd();
app.use('/',require('./route/User'))
const PORT =5000;
app.listen(PORT , (err)=>{
    console.log(`server is running a port ${PORT}`)
    
})