import React, { useState , useEffect } from 'react';
import { Radio, Space, Tabs } from 'antd';
import axios from 'axios';
import '../Styles/Bookroom.css'
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "./Loader";

const Profilescreen = () => {
   
    const [tabPosition, setTabPosition] = useState('left');
    const navigate = useNavigate();
   const user = JSON.parse(localStorage.getItem("currentUser"))
//   console.log(user);

   useEffect(()=>{

    if(!user){
        navigate('/login');
    }
   },[])

  return (
    <div className='ml-10 mt-5'>
      <Tabs tabPosition={tabPosition}>
        <Tabs.TabPane tab="Profile" key="1">
        <h1>Profile</h1>
        <br/>
        <h3>Username: {user.data.currentUser.name}</h3>
        <h3>E-mail : {user.data.currentUser.email}</h3>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Bookings" key="2">
         <Mybookings/>
        </Tabs.TabPane>
        <Tabs.TabPane tab="settings" key="3">
         <h1>settings</h1>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default Profilescreen;
const user = JSON.parse(localStorage.getItem("currentUser"))

export function Mybookings(){
    const [Rooms , setRooms] = useState([]);
    const [bookings , setBookings] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
        const fetchBookings = async () => {
          try {
            setLoading(true);
            const response = await axios.post("http://localhost:5001/api/bookings/getbookingsbyuserid", { userid: user.data.currentUser._id });
            const bookingsData = response.data; // Assuming the data you need is in the 'data' property
            console.log(bookingsData);
            setBookings(bookingsData);
            setLoading(false);
            fetchRoomData(bookingsData);
          } catch (error) {
            console.log(error);
            setLoading(false);
          }
        };
    
        fetchBookings();
      }, []);



      const fetchRoomData = async (bookingsData) => {
        try {
          const roomData = await Promise.all(bookingsData.map(async (booking) => {
            const response = await axios.post("http://localhost:5001/api/rooms/getroombyid", { roomid: booking.roomid });
            return response.data;
          }));
          console.log(roomData);
          setRooms(roomData);
        } catch (error) {
          console.log(error);
        }
      };
      

    return(
        <div className='row'>
        <div className='col-md-6'>
          {loading && (<Loader />)}
          {Rooms.length > 0 && bookings.length > 0 && (
            <div className='ml-10  boxshaows'>
              {bookings.map((booking, index) => (
                <div key={index} style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <div>
                  <h5>Booking {index + 1}</h5>
                  <h4>  {Rooms[index]?.name}</h4>
                
                 
                    {Rooms[index]?.imageurls && Rooms[index].imageurls.length > 0 && (
                      <img src={Rooms[index].imageurls[0]} alt="Room" style={{ maxWidth: "320px" }} />
                    )}
                  </div>
                  <div style={{ marginLeft: "10%" , paddingTop:"90px" }}>
                   
                    
                    <p> <b>Max Count:</b> {Rooms[index]?.maxcount}</p>
                    
                  
                    <p><b>From Date: </b>{booking.fromdate}</p>
                    <p><b>To Date:</b> {booking.todate}</p>
                    <p><b>Total Days:</b> {booking.totaldays}</p>
                    <p><b>Total Amount:</b> {booking.totalamount}</p>
                    <p><b>Status:</b> {booking.status=='booked' ? "CONFIRMED" : "CANCELLED"}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    )
}