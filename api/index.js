// import the libraries 
const express = require('express')
const bodyParesr = require('body-parser')
const mongoose = require('mongoose')
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')


const app = express()
dotenv.config()
const port = process.env.PORT
// middleware
app.use(bodyParesr.urlencoded({ extended: true }))
app.use(bodyParesr.json())

// connecting to mongo
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('Connceted to mongoDB')
})
.catch((e)=>{
    console.log(e);

})

app.get('/',(req,res)=>{
    res.send('Testing')
})
app.listen(port, () => {
    console.log('Server is running');
})