
const mongoose = require( 'mongoose' );
const mongodb_URI = 'mongodb://localhost/class_forms'


mongoose.connect( mongodb_URI, { useNewUrlParser: true, useUnifiedTopology: true } );

mongoose.set('useFindAndModify', false); 
const createError = require("http-errors"); 
const express = require("express");
const path = require("path"); 
const cookieParser = require("cookie-parser"); 
const session = require("express-session"); 
const debug = require("debug")("personalapp:server"); 
const layouts = require("express-ejs-layouts");


mongoose.set('useCreateIndex', true);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("we are connected!!!")});


const Class = require("./models/Class")


app.get('/class',
  async (req,res,next) => {
    try{
      let items = await Class.find({});
      res.locals.items = items;
      res.render("class");
    } catch (e){
      next(e);
    }
  }
  )

router.post('/class/add',
async (req,res,next) => {
  try{
    const {name,code,semester} = req.body; 

    let data = {name,code,semester} 
    let item = new Class(data) 
    await item.save() 
    res.redirect('/class')  
  } catch (e){
    next(e);
  }
})

module.exports = router;