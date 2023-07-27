const express = require('express');
const router = express.Router();


const City = require('../Models/citymodel')




router.post("/newcity" , async (req , res)=>{
    try {
        const cities = await City.create(req.body)
        res.status(200).json(cities)
        console.log('cities is added ')
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} )




router.get("/getcities/:city", async(req,res)=>{
    try {
      const city = req.params.city;
      console.log('cityquery:', city)
      const citiees = await City.find({ city: city })
      console.log("cities", citiees)
      
        console.log(city)
        return res.json({citiees});
    } catch (error) {
        return res.status(400).json({message:error});
    }
});


router.post('/addcity' , async (req,res)=>{
    try {
      const newcity = new City(req.body)
      await newcity.save()
  
      res.send('new city addedd successfully')
    } catch (error) {
      return res.status(400).json({message:error});
      
    }
  })
module.exports = router;