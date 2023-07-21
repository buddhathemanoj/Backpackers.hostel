const mongoose = require("mongoose");


const mongoURL = 'mongodb+srv://prabhakarmanoj743:8838243878@cluster0.zbcijop.mongodb.net/SLEEPSAFARIROOMS'

mongoose.connect(mongoURL, {
    useUnifiedTopology:true,
    useNewUrlParser:true
})
var connection = mongoose.connection

connection.on('error',()=>{
    console.log('MOngodb connection fAILED')
})
connection.on('connected',()=>{
    console.log('mongodb connected sucessfully')
})

module.exports = mongoose