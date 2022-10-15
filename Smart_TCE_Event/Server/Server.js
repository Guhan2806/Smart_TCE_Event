const express=require('express')
const mongoose =require('mongoose')
const bodyParser = require("body-parser");
const app=express()
const db=require('./config/keys').MongoURI
mongoose.connect(db,{useNewUrlParser: true})
.then(()=>console.log('MongoDB Connected...'))
.catch(err=>console.log(err))
app.use(bodyParser.json())
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use('/admin',require('./routes/admin'))
const PORT=5000
app.use(cors());
app.listen(PORT,console.log("Success"))