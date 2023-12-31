const mongoose = require('mongoose');

const roomSchema = mongoose.Schema({

    name:{
        type:String,
        required: true
    },
    maxcount:{
        type:Number,
        required: true
    },
    rentperday:{
        type:Number,
        required: true
    },
    amenity:{
        type:[String],
        required:true
            },
    imageurls: [],
    currentbooking:[],
    city:{type:String , required:true},
 
   
} ,{
        timestamps : true,
    })

const roomModel = mongoose.model('rooms' , roomSchema)

module.exports = roomModel;