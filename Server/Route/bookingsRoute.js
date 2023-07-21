const express = require('express');
const router = express.Router();
const Booking = require('../Models/booking');
router.post("/bookroom", async (req, res) => {
    // const {
    //     room,
    //     userid,
    //     fromdate,
    //     todate,
    //     totalamount,
    //     totaldays,
    // } = req.body;

    var body = req.body;
    const roomId = body.roomid;
    // Corrected variable name in the validation check
    // if (!room || !userid || !fromdate || !todate || !totalamount || !totaldays) {
    //     return res.status(400).json({ error: 'Missing required fields' });
    // }

    try {
        const newbooking = new Booking({
            roomid: roomId,
            userid : body.user.data.currentUser._id,
            fromdate: body.fromdate,
            todate: body.todate,
            totalamount:body.totalamount,
            totaldays:body.totaldays,
        });

        const booking = await newbooking.save();
        
        console.log('New Booking:', booking);

        // Find the corresponding room using the roomid (roomId)
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

        // Save the updated room document
        await bookingDetails.save();
        console.log('Room Updated:', bookingDetails);

        res.status(200).json({ message: 'Room booked successfully', booking });
        res.status(200).json({ message: 'Room booked successfully', booking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'An error occurred while booking the room' });
    }
});
module.exports = router;
