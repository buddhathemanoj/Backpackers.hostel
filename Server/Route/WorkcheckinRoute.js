const express = require('express');
const router = express.Router();

const WorkCheckin = require('../Models/WorkationSelectionmodel')




router.post('/newworkcheckinselection' , async (req,res) =>{
 
  try {
    const newcheckinwork = new WorkCheckin(req.body)
    await newcheckinwork.save()
    res.send('new workation city selection added to menu')
  } catch (error) {
    return res.status(400).json({message:error});
  }

} )

router.get('/getallworkforselection', async (req,res)=>{

    try {
        const workcities =  await WorkCheckin.find()
        res.send(workcities)
    } catch (error) {
        return res.status(400).json({message:error});
    }
})

module.exports = router;