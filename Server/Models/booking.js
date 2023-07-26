const mongoose = require('mongoose');
const moment = require("moment");
const bookingSchema = mongoose.Schema({
    roomid:{
        type:String,
        required:true
    },
    userid :{
        type:String,
        required:true
    },
    fromdate: {
        type: String,
        required: true,
        // Custom getter to format date on retrieval
        get: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
      },
      todate: {
        type: String,
        required: true,
        // Custom getter to format date on retrieval
        get: (date) => (date ? moment(date).format("DD-MM-YYYY") : null),
      },
    totalamount:{
        type:Number,
        required:true
    },
    totaldays:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        required:true,
        default:'booked'
    }
},
{
    timestamps:true,
})
const bookingModel = mongoose.model('bookings' , bookingSchema)

module.exports = bookingModel