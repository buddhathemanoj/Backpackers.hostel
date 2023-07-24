import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import "../Styles/Bookroom.css";
import { Loader } from "./Loader";
import StripeCheckout from 'react-stripe-checkout';
import { Error } from "@mui/icons-material";
import moment from "moment";

export const Bookingscreen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [room, setRoom] = useState(null);
 const [totalamount, setTotalamount] = useState();

  const { roomid } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const fromdate = queryParams.get("fromdate");
  const todate = queryParams.get("todate");
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };
  
  const formattedFromDate = formatDate(fromdate);
  const formattedToDate = formatDate(todate);
  // Function to calculate the difference between two dates in days
  function dateDiffInDays(formattedFromDate, formattedToDate) {
    const oneDay = 24 * 60 * 60 * 1000; // One day in milliseconds
    const startDate = moment(formattedFromDate, "DD-MM-YYYY").toDate();
    const endDate = moment(formattedToDate, "DD-MM-YYYY").toDate();
    const diffInDays = Math.round((endDate - startDate) / oneDay);
    return diffInDays + 1;
  }
  const differenceInDays = dateDiffInDays(formattedFromDate, formattedToDate);
   
  const totaldays = differenceInDays;
  
  useEffect(() => {
    console.log("Fetching room data...");
    const fetchRoom = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          "http://localhost:5001/api/rooms/getroombyid",
          { roomid: roomid }
        );
        console.log("API Response:", response.data);
        setRoom(response.data);
        setLoading(false);
        setTotalamount(differenceInDays * response.data.rentperday); 
        console.log("Room data fetched successfully!");
        console.log(totalamount)
      } catch (error) {
        setLoading(false);
        setError(true);
        console.error("Error fetching room data:", error);
      }
    };

    fetchRoom(); //  to fetch the data
  }, [roomid]); // e roomid in the array to fetch data when it changes




 async function onToken(token){
    console.log(token)
    const bookingDetails = {
      roomid,
      user :  JSON.parse(localStorage.getItem('currentUser')),
      fromdate,
      todate,
      totalamount,
      totaldays
    } 
    console.log("Handle booking data:", roomid, bookingDetails.user, fromdate, todate, totalamount, totaldays);
      try {
        const result = await axios.post("http://localhost:5001/api/bookings/bookroom" , bookingDetails)
        console.log("Booking result:", result.data);
      } catch (error) {
        console.log(error);
      }
    
  }
  return (
    <div style={{ padding: "0 10%" }} className="m-5">
      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        <div>
          {room && (
            <div className="row justify-content-center mt-5 boxshaows ">
              <div style={{ paddingRight: "30px" }} className="col-md-6">
                <h2>{room.name}</h2>
                <img className="bigimgcaro" src={room.imageurls[0]} />
              </div>

              <div className="col-md-6 Deatails ">
                <div>
                  <br />

                  <h1>Bokking Summary</h1>
                  <hr />
                  <b>
                    <p>Name: Manoj Prabhakar</p>
                    <p>From Date :{formattedFromDate} </p>
                    <p>To Date : {formattedToDate}</p>
                    <p> Max Count : {room.maxcount}</p>
                  </b>
                </div>
                <div>
                  <h1> Checkout Price</h1>
                  <hr />
                  <p>Total Days: {differenceInDays}</p>
                  <p>Rent per Day:{room.rentperday}</p>
                  <p>Total Amount :{differenceInDays * room.rentperday} </p>
                </div>
                <div>
                  

                  <StripeCheckout
        token={onToken}
        amount={(differenceInDays * room.rentperday )* 100}
        currency="INR"
        stripeKey="pk_test_51NX1EUSF1xBrB4nWgV6TOnSz5qlNdNgENlb1T6eMks22szA4hBNpLDKrTt12bFr4GxGu7ygJlTLuF8kAzO0PIN8j00TrEJj6jw"
      ><button className="btn-primary" >Pay Now</button></StripeCheckout>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
