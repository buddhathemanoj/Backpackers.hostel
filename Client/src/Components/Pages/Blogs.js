import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../Styles/Blog.css'
import axios from 'axios';
import Blogheadpic from "../Assets/TH-BLogsmain.webp";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
  
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/blogs/getallblogs');
        
        const sortedBlogs = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(sortedBlogs);
      
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <div>
      <div>
        <img style={{ width: '100%' }} src={Blogheadpic} alt='blogs' />
      </div>
      <br />
      <div  style={{padding:'0 6%'}} className='row'>
        {blogs.map((blog) => (
         
         <div key={blog._id} className='col-md-4'>
            <Link to={`/blogs/${blog._id}`} className="blog-link">
            <img
  src={blog.blogpics[1]}
  alt={`Blog ${blog.heading}`}
  style={{ width: '100%', marginBottom: '10px' , borderRadius:'10px' }}
  onLoad={() => console.log('Image loaded successfully')} // Add this line to see if the image is loading
/>

            
            <div style={{ position: 'absolute', top: 0, left: "10px", width: '100%', height: '100%', color: 'white', padding: '10px' }}>
              <p style={{ fontSize: '14px', margin: 0 ,maxWidth:'90px',padding:' 0 7px 2px 7px ', backgroundColor:'#343a402e', borderRadius:'5px' }}>{blog.minutesread}</p>

            </div>
            <div style={{display:'flex' ,  color:'#595959', padding:'0 20px', justifyContent:'space-between'}}>
            <p style={{ fontSize: '14px', margin: 0 , color:'#595959'}}>{new Date(blog.createdAt).toLocaleDateString()}</p>
            <p>by  {blog.author}</p>
              </div>
           
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
              <h2>{blog.heading}</h2>
              <p>{blog.synopsis}</p>
              <div style={{ display: 'flex' }}>
                {blog.tags.map((tag, index) => (
                 <b> <p key={index} style={{ marginRight: '5px', fontSize:'12px' , backgroundColor:'#FFFACA' , padding:'5px'   }}>{tag}</p></b>
                ))}
              </div>
            </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
