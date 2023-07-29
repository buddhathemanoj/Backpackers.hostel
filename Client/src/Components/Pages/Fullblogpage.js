
import React, { useEffect, useState } from 'react';
import { Collapse } from 'antd';
import '../Styles/Agra.css'
import { useParams , Link} from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';
import Blogs from './Blogs';

  









const FullBlogPage = (props) => {
  const { id } = useParams();
  const [blogdata, setBlogdata] = useState();
 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5001/api/blogs/getblogbyid", {
          params: { blogid: id } 
        });

        const blogData = response.data;
        setBlogdata(blogData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBlogs();
  }, [id]); 
  function removeHTMLTags(input) {
    return input.replace(/<[^>]+>/g, '');
  }

  function splitParagraphByWordCountWithFullStops(paragraph, wordCount) {
    const plainText = removeHTMLTags(paragraph);
    const words = plainText.split(' ');
    const result = [];
    let currentPart = '';

    for (const word of words) {
      if (currentPart.split(' ').length + 1 <= wordCount) {
        currentPart += word + ' ';
      } else {
        result.push(currentPart.trim());
        currentPart = word + ' ';
      }

      if (word.endsWith('.') && currentPart.split(' ').length >= wordCount) {
        result.push(currentPart.trim());
        currentPart = '';
      }
    }

    if (currentPart !== '') {
      result.push(currentPart.trim());
    }

    return result;
  }
  
  return (
    <div>
      <br />
      <br />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <p style={{ lineHeight: '10px !important', maxWidth: '100px', margin: 0, backgroundColor: '#343a402e', textAlign: 'center', padding: '3px 7px', borderRadius: '5px' }}>{blogdata?.minutesread}</p>
</div>

      <div className='row justify-content-center'>
        <h1 style={{ padding: '10px 0' }}>{blogdata?.heading}</h1>
        <div style={{ position: 'relative' }}>
          <img style={{ borderRadius: '20px' }} src={blogdata?.blogpics[0]} alt='blog' />
          <div style={{ position: 'absolute', bottom: 10, left: 10, padding: '5px' }}>
            <div style={{ display: 'flex' }}>
              {blogdata?.tags.map((tag, index) => (
                <b key={index}>
                  <p style={{ marginRight: '5px', fontSize: '12px', backgroundColor: '#FFFACA', padding: '5px' , borderRadius:'5px' }}>{tag}</p>
                </b>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: '1% 7%' }} className='row'>
        <div className='col-md-8' style={{ textAlign: 'left', maxHeight: '150vh', padding: '0 40px', overflowY: 'scroll' }}>
          <p style={{ lineHeight: '10px' }}>By {blogdata?.author}</p>
          <p style={{ fontSize: '14px', margin: 0, color: '#595959' }}>
            {new Date(blogdata?.createdAt).toLocaleDateString()}
          </p>
          <p>{blogdata?.synopsis}</p>
          {blogdata?.subheading.map((subheading, index) => (
            <div key={index}>
              <h4>{subheading}</h4>
              <img src={blogdata?.blogpics[index + 1]} style={{ maxWidth: '800px' }} alt={`Image ${index}`} />
              <p>{blogdata?.blogpicsdiscrption[index]}</p>
              {/* Render the sanitized HTML content */}
              <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blogdata?.contentparas[index + 1]) }} />
              {/* Rest of your code */}
              {blogdata?.contentparas[index + 1] && (
                <>
                  {splitParagraphByWordCountWithFullStops(blogdata?.contentparas[index + 1], 100).map((part, partIndex) => (
                    <p style={{ textAlign: 'justify' }} key={partIndex}>{part}</p>
                  ))}
                </>
              )}
            </div>
          ))}
        </div>
        <div className='col-md-4'>
          
          
          <br/>
         <Recentblogs />

        </div>
      </div>

      <br />

    </div>
  );
};

export default FullBlogPage;




export const Recentblogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [similarReads, setSimilarReads] = useState([]);
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
    useEffect(() => {
        const fetchRandomBlogs = async () => {
          try {
            const response = await axios.get('http://localhost:5001/api/blogs/getrandomblogs');
            setSimilarReads(response.data);
          } catch (error) {
            console.log(error);
          }
        };
    
        fetchRandomBlogs();
      }, []);
    
    const sortedBlogs = blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    const recentPosts = sortedBlogs.slice(0, 3).map((blog, index) => (
        <div key={blog._id}>
            <Link to={`/blogs/${blog._id}`} className='blog-link'>
          <div style={{ display: 'flex', padding:'5px 0' }}>
            {blog.blogpics.length > 0 && (
              <img
                src={blog.blogpics[1]}
                alt={`Image ${index}`}
                style={{ width:'100px', height: '100px', borderRadius:'10px', objectFit: 'cover' }}
              />
            )}
            <h5 style={{textAlign:'center',padding:'20px 0 0 0'}}>{blog.heading}</h5>
          </div>
          </Link>
        </div>
      ));
      const similarReadsPosts = similarReads.map((blog, index) => (
        <div key={blog._id}>
          <Link to={`/blogs/${blog._id}`} className='blog-link'>
            <div style={{ display: 'flex', padding: '5px 0' }}>
              {blog.blogpics.length > 0 && (
                <img
                  src={blog.blogpics[1]}
                  alt={`Image ${index}`}
                  style={{ width: '100px', height: '100px', borderRadius: '10px', objectFit: 'cover' }}
                />
              )}
              <h5 style={{ textAlign: 'center', padding: '20px 0 0 0' }}>{blog.heading}</h5>
            </div>
          </Link>
        </div>
      ));
    
      const onChange = (key) => {
        console.log(key);
      };
    
      return (
        <Collapse defaultActiveKey={['1']} onChange={onChange}>
          <Collapse.Panel key="1" header="RECENT POSTS">
            {recentPosts}
          </Collapse.Panel>
    
          {/* Add additional Collapse.Panel components for different purposes */}
          <Collapse.Panel key="2" header="SIMILAR READS">
          {similarReadsPosts}
          </Collapse.Panel>
    
          <Collapse.Panel key="3" header="INSTAGRAM">
            {/* Content for INSTAGRAM panel */}
          </Collapse.Panel>
        </Collapse>
      );
    };