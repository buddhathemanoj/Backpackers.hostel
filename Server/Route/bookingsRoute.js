
const express = 

require("express");
const router = express.Router();
const Room = require('../Models/room')
const moment = require("moment");


const Booking = require("../Models/booking");
const stripe = require("stripe")(
  "sk_test_51NX1EUSF1xBrB4nWnhn1jXUSWZWctbuU1pxXHTlpBqVFMXXGJlq1Q7fyaxxOpeGvvm23MYa0m2XThlst0Ka4eYDJ006K0YYwLk"
);
const { v4: uuidv4 } = require("uuid");
router.post("/bookroom", async (req, res) => {
    try {
      var body = req.body;
      const roomId = body.roomid;
      const token = body.token.id;
  
      console.log("Token::", token);
      if (!token) {
        return res.status(400).json({ error: "No payment token provided" });
      }
     const paymentMethod = await stripe.paymentMethods.create({
        type: "card",
        card: {
          token: token,
        },
      });
     
      const paymentMethodID = paymentMethod.id;
      console.log("Payment Method ID:", paymentMethodID);

   const customer = await stripe.customers.create({
        email: body.token.email,
        payment_method: paymentMethodID,
      });
      const customerID = customer.id;
      const updatedCustomer = await stripe.customers.update(customerID, {
        invoice_settings: {
          default_payment_method: paymentMethodID, 
        },
      });
  
      console.log("Customer:", updatedCustomer);
  
      if (!updatedCustomer.invoice_settings.default_payment_method) {
        return res.status(400).json({ error: "No payment methods found for the customer" });
      }
  
     
      const paymentIntent = await stripe.paymentIntents.create({
        amount: body.totalamount * 100, // Amount in cents
        currency: "inr",
        customer: customer.id,
        payment_method: updatedCustomer.invoice_settings.default_payment_method,
        receipt_email: body.token.email, 
        off_session: true,
        confirm: true,
      });
    if (paymentIntent.status == "succeeded") {
      try {
        const newbooking = new Booking({
          roomid: roomId,
          userid: body.user.data.currentUser._id,
          fromdate: moment(body.fromdate).format("DD-MM-YYYY"),
          todate: moment(body.todate).format("DD-MM-YYYY"),
          totalamount: body.totalamount,
          totaldays: body.totaldays,
        });

        const booking = await newbooking.save();
        console.log('New Booking:', booking);

      
        const bookingDetails = await Room.findOne({ _id: roomId });
        console.log('Booking Details:', bookingDetails);

        if (!bookingDetails) {
          return res.status(404).json({ error: 'Room not found' });
        }

        bookingDetails.currentbooking.push({
          bookingid: booking._id,
          fromdate: booking.fromdate,
          todate: booking.todate,
          userid: booking.userid,
          status: booking.status,
        });

        console.log('Updated Booking Details:', bookingDetails);

      
        await bookingDetails.save();
        console.log('Room Updated:', bookingDetails);

        res.status(200).json({ message: 'Room booked successfully', booking });
      } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'An error occurred while booking the room' });
      }
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    console.error("Error processing payment:", error);
    return res.status(400).json({ error: "Something went wrong" });
  }
});


router.post('/getbookingsbyuserid',async(req,res)  =>{
 
 const userid = req.body.userid
  

 try {
  const bookings = await Booking.find({userid :userid})
  res.send(bookings)
 } catch (error) {
   return res.status(400).json({ error})
 }
} )
module.exports = router;
