const express=require('express')
const router =express.Router()
const Event=require('../models/Event')
router.get('/add',(req,res)=>{
    Event.find({},function (err, result) {
        if (err) {
            res.send(err);
        } else {

            res.send(JSON.stringify(result));
        }
    })
})
router.post('/add',(req,res)=>{
    const{name,date,summary}=req.body
    const newEvent=new Event({name,date,summary})
    newEvent.save().then(console.log('saved'))
})
module.exports=router