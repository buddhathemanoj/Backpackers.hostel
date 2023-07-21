const express = require('express');
const router = express.Router();



const Room = require('../Models/room')


      

router.post("/newrooms" , async (req,res)=>{
    try {
        const rooomss = await Room.create(req.body)
        res.status(200).json(rooomss);
        console.log('successfully addeed')
    }  catch (error) {
        res.status(500).json({ message: error.message });
      }
} );


router.post("/getroombyid" , async (req,res)=>{
    const roomid =req.body.roomid
    try {
        const room = await Room.findOne({_id:roomid})
        res.send(room);
        
    }  catch (error) {
        res.status(500).json({ message: error.message });
      }
} );

router.get("/getallrooms", async(req,res)=>{
    try {
        const roooms = await Room.find({})
        console.log('room', roooms)
        return res.json({roooms});
    } catch (error) {
        return res.status(400).json({message:error});
    }
});


module.exports = router;