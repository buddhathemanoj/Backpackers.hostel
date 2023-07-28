

import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/Bookroom.css";
import { Roomslist } from "./Roomslist";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";
import moment from "moment";
import { DatePicker } from "antd";

import { Error } from "@mui/icons-material";



export const Bookroom = ({city}) => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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

  function filterByDate(dates) {
    if (dates && dates.length === 2) {
      setFromDate(dates[0].startOf("day").toDate());
      setToDate(dates[1].endOf("day").toDate());
    } else {
      setFromDate(null);
      setToDate(null);
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
      <div style={{ marginLeft: "12%" }} className="col-md-3">
        <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
      </div>
      <div className="row justify-content-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          rooms.map((room) => (
            <div key={room._id} className="col-md-9 mt-5">
              <Roomslist room={room} fromdate={fromDate} todate={toDate} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Roomslist } from "./Roomslist";
// import { Loader } from "./Loader";
// import { DatePicker } from "antd";
// import { Error } from "@mui/icons-material";
// import moment from "moment";
// export const Bookroom = ({ city }) => {
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);
//   const [duplicateRooms, setDuplicateRooms] = useState([]);
//   const { RangePicker } = DatePicker;
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(`http://localhost:5001/api/rooms/getallrooms/${city}`);
//         console.log("API Response:", response.data);
//         const mainArray = response.data.rooms;
//         setRooms(mainArray);
//         setDuplicateRooms(mainArray);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         console.log(error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [city]);

//   function filterByDate(dates) {
//     if (dates && dates.length === 2) {
//       setFromDate(dates[0].startOf("day").toDate());
//       setToDate(dates[1].endOf("day").toDate());
//     } else {
//       setFromDate(null);
//       setToDate(null);
//     }
//   }

//   useEffect(() => {
//     if (fromDate && toDate) {
//       const filteredRooms = duplicateRooms.filter((room) => {
//         let availability = true;

//         for (const booking of room.currentbooking) {
//           const fromDateBooking = moment(booking.fromdate, "DD-MM-YYYY").startOf("day").toDate();
//           const toDateBooking = moment(booking.todate, "DD-MM-YYYY").endOf("day").toDate();

//           if (
//             (fromDate >= fromDateBooking && fromDate <= toDateBooking) ||
//             (toDate >= fromDateBooking && toDate <= toDateBooking) ||
//             (fromDate <= fromDateBooking && toDate >= toDateBooking)
//           ) {
//             availability = false;
//             break;
//           }
//         }

//         return availability;
//       });

//       setRooms(filteredRooms);
//     } else {
//       // If no date range selected, show all rooms
//       setRooms(duplicateRooms);
//     }
//   }, [fromDate, toDate, duplicateRooms]);

//   return (
//     <div>
//       <div style={{ marginLeft: "12%" }} className="col-md-3">
//         <RangePicker format="DD-MM-YYYY" onChange={filterByDate} />
//       </div>
//       <div className="row justify-content-center">
//         {loading ? (
//           <Loader />
//         ) : error ? (
//           <Error />
//         ) : (
//           rooms.map((room) => (
//             <div key={room._id} className="col-md-9 mt-5">
//               <Roomslist room={room} fromdate={fromDate} todate={toDate} />
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
