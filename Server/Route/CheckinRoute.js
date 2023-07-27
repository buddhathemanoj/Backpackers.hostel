const express = require('express');
const router = express.Router();

const Checkincity = require('../Models/checkincity')




router.post('/newcheckinselection' , async (req,res) =>{
 
  try {
    const newcheckincity = new Checkincity(req.body)
    await newcheckincity.save()
    res.send('new city selection added to menu')
  } catch (error) {
    return res.status(400).json({message:error});
  }

} )

router.get('/getallcityforselection', async (req,res)=>{

    try {
        const cities =  await Checkincity.find()
        res.send(cities)
    } catch (error) {
        return res.status(400).json({message:error});
    }
})

module.exports = router;