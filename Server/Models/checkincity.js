const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const newcitycheckin = new Schema({
   value:{
    type:String,
    required:true
   },
   label:{
    type:String,
    required:true
   }
})

const Checkincity = mongoose.model("Checkincity" , newcitycheckin)

module.exports = Checkincity