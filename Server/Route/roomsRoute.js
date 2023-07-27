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

router.post("/findroomnamebyid", async (req, res) => {
    const roomids = req.body.roomids;
    try {
      const rooms = await Room.find({ _id: { $in: roomids } }, { name: 1, _id: 0 }); // Include only the 'name' field and exclude the '_id' field
      const roomNames = rooms.map((room) => room.name);
      res.send(roomNames);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  
router.get("/getallrooms/:city", async(req,res)=>{
    try {
      const city = req.params.city;
      console.log('city used in query:', city)
      const roooms = await Room.find({ city: city })
      console.log('room::', roooms)
      
        console.log(city)
        return res.json({roooms});
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

router.get('/getalllrooms', async (req,res)=>{

  try {
    const rooms = await Room.find()
    res.send(rooms)
  } catch (error) {
    return res.status(400).json({message:error});
  }
}  )



router.post('/addrooms' , async (req,res)=>{
  try {
    const newroom = new Room(req.body)
    await newroom.save()

    res.send('new room saved successfully')
  } catch (error) {
    return res.status(400).json({message:error});
    
  }
})

module.exports = router;