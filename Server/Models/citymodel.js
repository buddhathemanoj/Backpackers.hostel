const mongoose = require('mongoose');

const citySchema = mongoose.Schema({

    city:{
        type:String,
        required:true
    },
    first4pics:[],
    heading:{
        type:String,
        required:true
    },
    seeless:{
        type:String,
        required:true
    },
    seemore:{
        type:String,
        required:true
    },
    whatwedopics:[],
    whatwedoheadng:{
type:[String],
required:true
    },
    whatwedopara:{
        type : [String],
        required:true
    }
},{
    timestamps : true,
})

const cityModel = mongoose.model('city' , citySchema)

module.exports = cityModel