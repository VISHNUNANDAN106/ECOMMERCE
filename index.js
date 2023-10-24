//import .env file
require('dotenv').config()
//server creation

//express
// import express

const express=require('express')
const router = require('./routes/router')
const cors = require('cors')


// create server using express
const server=express()
//integrate front end
server.use(cors())

//convert all incoming json data to js data
server.use(express.json())

//router set
server.use(router)

//import connection.js file
require('./db/connection')

// run
//port
const port=5001 || process.env.port
server.listen(port,()=>{
    console.log(`server started at port number ${port}`);
})
//api calls resolve
// server.post('/login',(req,res)=>{
//     console.log(req.body.acno);
//     console.log(req.body.psw);
//     res.send("login worked")
// })