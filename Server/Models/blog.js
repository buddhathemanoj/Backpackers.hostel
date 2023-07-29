const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  
    heading:{
        type:String,
        required:true
    },
    synopsis:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    minutesread:{
        type:String,
        required:true
    },
    tags:{
        type : [String],
        required:true
    },
    blogpics:{
        type:[],
    },
    blogpicsdiscrption:{
        type : [String]
        
    },
    subheading:{
        type : [String],
        required:true
    },
    subheading1:{
        type : [String],
       
    },
    contentparas:{
        type : [String],
        required:true
    }





},{
    timestamps : true,
})

const blogModel = mongoose.model('blog' , blogSchema)
module.exports = blogModel