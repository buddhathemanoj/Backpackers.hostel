

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Bookroom.css";
import { Roomslist } from "./Roomslist";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import moment from "moment";
import { DatePicker } from "antd";

import { Error } from "@mui/icons-material";



export const WorkationBookroom = ({city}) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [errorMessage, setErrorMessage] = useState(null);

  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const { RangePicker } = DatePicker;
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  console.log("Selected City:", city);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5001/api/rooms/getallrooms/${city}`);

        console.log("API Response:", response.data);
        const mainArray = response.data.roooms;
        setRooms(mainArray);
        setDuplicateRooms(mainArray);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [city]);

  function disabledDate(current) {
    return current && current < moment().endOf("day").add(1, 'day'); // Disable dates before tomorrow
  }

  function filterByDate(dates) {
    if (dates && dates.length === 2) {
      const fromDate = new Date(dates[0]);
      const toDate = new Date(dates[1]);

      // Check if the difference between fromDate and toDate is at least 6 days
      if (toDate.getTime() - fromDate.getTime() >= 6 * 24 * 60 * 60 * 1000) {
        setFromDate(fromDate);
        setToDate(toDate);
        setErrorMessage(null); // Clear any previous error message
      } else {
        setErrorMessage("Minimum date range should be 6 days.");
      }
    } else {
      setFromDate(null);
      setToDate(null);
      setErrorMessage(null); // Clear error message when no date range is selected
    }
  }
  useEffect(() => {
    if (fromDate && toDate) {
      const filteredRooms = duplicateRooms.filter((room) => {
        let availability = true;

        for (const booking of room.currentbooking) {
          const fromDateBooking = moment(booking.fromdate, "DD-MM-YYYY").startOf("day").toDate();
          const toDateBooking = moment(booking.todate, "DD-MM-YYYY").endOf("day").toDate();

          if (
            (fromDate >= fromDateBooking && fromDate <= toDateBooking) ||
            (toDate >= fromDateBooking && toDate <= toDateBooking) ||
            (fromDate <= fromDateBooking && toDate >= toDateBooking)
          ) {
            availability = false;
            break;
          }
        }

        return availability;
      });

      setRooms(filteredRooms);
    } else {
      // If no date range selected, show all rooms
      setRooms(duplicateRooms);
    }
  }, [fromDate, toDate, duplicateRooms]);

  return (
    <div >
      <div  className="col-md-3">
      <DatePicker.RangePicker
          format="DD-MM-YYYY"
          onChange={filterByDate}
          disabledDate={disabledDate}
        />
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <div className="row ">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          rooms.map((room) => (
            <div key={room._id} className="col-md-7 mt-5">
              <Roomslist room={room} fromdate={fromDate} todate={toDate} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

