const express = require('express');
const router = express.Router();

const Blog = require('../Models/blog')


router.post('/newblog', async(req,res)=>{
    try {
        const blog = await Blog.create(req.body)
        res.status(200).json(blog)
        console.log('blog is added ')
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/getblogbyid', async (req, res) => {
    const BlogID = req.query.blogid; // Use req.query.blogid to get the blogid from the query parameters
    try {
      const blog = await Blog.findOne({ _id: BlogID }); // Use findOne instead of findone
      res.send(blog);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

 
  router.get('/getrandomblogs', async (req, res) => {
    try {
      const blogs = await Blog.find();
      const randomBlogs = getRandomElements(blogs, 4);
      res.send(randomBlogs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  function getRandomElements(arr, numRandom) {
    const shuffled = arr.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numRandom);
  }
  // Helper function to get random elements from an array

router.get("/getallblogs", async(req,res)=>{
    try {
        const blogs = await Blog.find()
        res.send(blogs)
      } catch (error) {
        return res.status(400).json({message:error});
      }
});

module.exports = router;