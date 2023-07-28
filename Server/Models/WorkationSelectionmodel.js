const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const newworkationcheckin = new Schema({
   value:{
    type:String,
    required:true
   },
   label:{
    type:String,
    required:true
   }
})

const Checkinworkation = mongoose.model("Checkinworkation" , newworkationcheckin)

module.exports = Checkinworkation