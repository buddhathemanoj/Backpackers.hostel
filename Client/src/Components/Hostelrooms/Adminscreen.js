import React, { useState, useEffect } from "react";
import axios from "axios";
import { Tabs } from "antd";
import { Table, Input } from "antd";
import { Loader } from "./Loader";
const { TabPane } = Tabs;

const user = JSON.parse(localStorage.getItem("currentUser"));
console.log(user)

export const Adminscreen = () => {
  return (
    <div className="mt-3 ml-3 boxshaows">
      <h1>ADMINPANEL</h1>

      <Tabs defaultActiveKey="1">
        <TabPane tab="Bookings" key="1">
          <Bookings />
        </TabPane>
        <TabPane tab="Rooms" key="2">
          <Rooms />
        </TabPane>
        <TabPane tab="Add-Rooms" key="3">
         <Addrooms/>
        </TabPane>
        <TabPane tab="Users" key="4">
          <Users />
        </TabPane>
        <TabPane tab="Add-City" key="5">
          <Addcity/>
        </TabPane>
      </Tabs>
    </div>
  );
};

export function Addrooms() {
       const[name,setName] = useState("")
       const[rentperday,setRentperday] = useState("")
       const[maxcount,setMaxcount] = useState("")
        const[city,setCity] = useState("")
        const[imageurl1, setimageUrl1] = useState()
        const[imageurl2, setimageUrl2] = useState()
        const[imageurl3, setimageUrl3] = useState()



    async    function handleAddroom(){

            const newroom = {
                name,
                rentperday,
                maxcount,
                city,
               imageurls:[imageurl1,imageurl2,imageurl3]
            }
            try {
                const response = await axios.post("http://localhost:5001/api/rooms/addrooms", newroom )
                const result = response.data
                console.log(result)
            } catch (error) {
               console.log(error)   
            }

            
        }

  return (
    <div className="row">
      <div className="col-md-10">
        <div className=" text-center">
<input type="text" className="form-control" placeholder="Roomname" value={name} onChange={(e)=>{setName(e.target.value)}} />
<input type="text" className="form-control" placeholder="Rentperday" value={rentperday} onChange={(e)=>{setRentperday(e.target.value)}}  />
<input type="text" className="form-control" placeholder="Maxcount"  value={maxcount} onChange={(e)=>{setMaxcount(e.target.value)}} />
<input type="text" className="form-control" placeholder="city" value={city} onChange={(e)=>{setCity(e.target.value)}} />
<input type="text" className="form-control" placeholder="Imageurl-1" value={imageurl1} onChange={(e)=>{setimageUrl1(e.target.value)}}  />
<input type="text" className="form-control" placeholder="Imageurl-2"  value={imageurl2} onChange={(e)=>{setimageUrl2(e.target.value)}} />
<input type="text" className="form-control" placeholder="Imageurl-3"  value={imageurl3} onChange={(e)=>{setimageUrl3(e.target.value)}} />

<br/>
<div className="text-right">
    <button className=" btn-primary" onClick={handleAddroom}>Addroom</button>
</div>
</div>
      </div>
     
    </div>
  );
}

export function Bookings() {
  const [bookings, setBookings] = useState([]); // Initialize bookings as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5001/api/bookings/getallbookings"
      );
      const result = response.data;
      setBookings(result);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetchBookings:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const columns = [
    {
      title: "Room ID",
      dataIndex: "roomid",
      key: "roomid",
    },
    {
      title: "User ID",
      dataIndex: "userid",
      key: "userid",
    },
    {
      title: "From Date",
      dataIndex: "fromdate",
      key: "fromdate",
      render: (text) => new Date(text).toLocaleDateString("en-IN"),
    },
    {
      title: "To Date",
      dataIndex: "todate",
      key: "todate",
      render: (text) => new Date(text).toLocaleDateString("en-IN"),
    },
    {
      title: "Total Amount",
      dataIndex: "totalamount",
      key: "totalamount",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    return booking.userid.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="row">
      <div className="col-md-10">
        <div>
          <h1>Search Bookings By User ID:</h1>
          <Input.Search
            placeholder="Enter User ID"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300, marginBottom: 16 }}
          />
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error fetching data</h1>
          ) : (
            <div>
              <h1>Total Bookings: {bookings.length}</h1>
              <Table dataSource={filteredBookings} columns={columns} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Rooms() {
  const [rooms, setRooms] = useState([]); // Initialize rooms as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchRooms = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5001/api/rooms/getalllrooms"
      );
      const result = response.data;
      setRooms(result);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetchRooms:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const columns = [
    {
      title: "Room ID",
      dataIndex: "_id", // Use '_id' property as roomid
      key: "roomid",
    },
    {
      title: "Room Name",
      dataIndex: "name",
      key: "roomname",
    },
    {
      title: "Rent Per Day",
      dataIndex: "rentperday",
      key: "rentperday",
    },
    {
      title: "Max Count",
      dataIndex: "maxcount",
      key: "maxcount",
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
    },
  ];

  const filteredRooms = rooms.filter((room) =>
    room.city.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="row">
      <div className="col-md-10">
        <div>
          <h1>Search Rooms By City:</h1>
          <Input.Search
            placeholder="Enter city name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300, marginBottom: 16 }}
          />
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error fetching data</h1>
          ) : (
            <div>
              <h1>Total Rooms: {rooms.length}</h1>
              <Table dataSource={filteredRooms} columns={columns} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function Users() {
  const [users, setUsers] = useState([]); // Initialize users as an empty array
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchText, setSearchText] = useState("");

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5001/api/users/getallusers"
      );
      const result = response.data;
      setUsers(result);
      setLoading(false);
    } catch (error) {
      console.log("Error in fetchUsers:", error);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const columns = [
    {
      title: "User ID",
      dataIndex: "_id",
      key: "userid",
    },
    {
      title: "First Name",
      dataIndex: "fname",
      key: "firstname",
    },
    {
      title: "Last Name",
      dataIndex: "lname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.fname} ${user.lname}`.toLowerCase();
    return fullName.includes(searchText.toLowerCase());
  });

  return (
    <div className="row">
      <div className="col-md-10">
        <div>
          <h1>Search Users By Name:</h1>
          <Input.Search
            placeholder="Enter name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: 300, marginBottom: 16 }}
          />
          {loading ? (
            <h1>Loading...</h1>
          ) : error ? (
            <h1>Error fetching data</h1>
          ) : (
            <div>
              <h1>Total Users: {users.length}</h1>
              <Table dataSource={filteredUsers} columns={columns} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


export function Addcity() {


    const[first4pics1,setfirst4pics1] = useState()
    const[first4pics2,setfirst4pics2] = useState()
    const[first4pics3,setfirst4pics3] = useState()
    const[first4pics4,setfirst4pics4] = useState()

    const[heading,setheading] = useState("")
    const[seeless,setseeless] = useState("")
    const[seemore,setseemore] = useState("")

     
    const[whatwedopics1,setwhatwedopics1] = useState()
    const[whatwedopics2,setwhatwedopics2] = useState()
    const[whatwedopics3,setwhatwedopics3] = useState()
    const[whatwedopics4,setwhatwedopics4] = useState()

    
    const[whatwedoheading1,setwhatwedoheading1] = useState()
    const[whatwedoheading2,setwhatwedoheading2] = useState()
    const[whatwedoheading3,setwhatwedoheading3] = useState()
    const[whatwedoheading4,setwhatwedoheading4] = useState()

    const[whatwedopara1,setwhatwedopara1 ]= useState()
    const[whatwedopara2,setwhatwedopara2 ]= useState()
    const[whatwedopara3,setwhatwedopara3 ]= useState()
    const[whatwedopara4,setwhatwedopara4 ]= useState()

    
     const[city,setCity] = useState("")
    
     const[value,setValue ]= useState("")
     const[label,setLabel ]= useState("")




 async    function handleAddcity(){

         const newcity = {
             city,
             heading,
             seeless,
             seemore,
             first4pics:[first4pics1,first4pics2,first4pics3,first4pics4],
             whatwedopics:[whatwedopics1,whatwedopics2,whatwedopics3,whatwedopics4],
             whatwedopara:[whatwedopara1,whatwedopara2,whatwedopara3,whatwedopara4],
             whatwedoheading:[whatwedoheading1,whatwedoheading2,whatwedoheading3,whatwedoheading4]
         }
         try {
            const response = await axios.post("http://localhost:5001/api/city/addcity", newcity )
                const result = response.data
             console.log(result)
         } catch (error) {
            console.log(error)   
         }

         
     }


async function handleAddcityselection(){

    const newcityselection = {
        value,
        label
    }
    try {
        const response = await axios.post("http://localhost:5001/api/checkin/newcheckinselection", newcityselection )
            const result = response.data
         console.log(result)
     } catch (error) {
        console.log(error)   
     }


     const newworkationcityselection = {
      value,
      label
    }
    try {
      const response1 = await axios.post("http://localhost:5001/api/work/checkin/newworkcheckinselection", newworkationcityselection )
          const result1 = response1.data
       console.log(result1)
    } catch (error) {
      console.log(error)   
    }
    


}



return (
    <div>
       <h2>To add the city page</h2> 
 <div className="row">

   <div className="col-md-5">
     <div className=" text-center">
<input type="text" className="form-control" placeholder="City Name" value={city} onChange={(e)=>{setCity(e.target.value)}} />
<input type="text" className="form-control" placeholder="Heading" value={heading} onChange={(e)=>{setheading(e.target.value)}}  />
<input type="text" className="form-control" placeholder="Seeless content"  value={seeless} onChange={(e)=>{setseeless(e.target.value)}} />
<input type="text" className="form-control" placeholder="Seemore content" value={seemore} onChange={(e)=>{setseemore(e.target.value)}} />
<input type="text" className="form-control" placeholder="firstcitypic-1" value={first4pics1} onChange={(e)=>{setfirst4pics1(e.target.value)}}  />
<input type="text" className="form-control" placeholder="firstcitypic-2"  value={first4pics2} onChange={(e)=>{setfirst4pics2(e.target.value)}} />
<input type="text" className="form-control" placeholder="firstcitypic-3"  value={first4pics3} onChange={(e)=>{setfirst4pics3(e.target.value)}} />
<input type="text" className="form-control" placeholder="firstcitypic-3"  value={first4pics4} onChange={(e)=>{setfirst4pics4(e.target.value)}} />
<input type="text" className="form-control" placeholder="whatwedopic-1"  value={whatwedopics1} onChange={(e)=>{setwhatwedopics1(e.target.value)}} />
<input type="text" className="form-control" placeholder="whatwedopic-2"  value={whatwedopics2} onChange={(e)=>{setwhatwedopics2(e.target.value)}} />


</div>

   </div>
   <div className="col-md-5">
     <div className=" text-center">
     <input type="text" className="form-control" placeholder="whatwedopic-3"  value={whatwedopics3} onChange={(e)=>{setwhatwedopics3(e.target.value)}} />
     <input type="text" className="form-control" placeholder="whatwedopic-4"  value={whatwedopics4} onChange={(e)=>{setwhatwedopics4(e.target.value)}} />
<input type="text" className="form-control" placeholder="whatwedoheading1" value={whatwedoheading1} onChange={(e)=>{setwhatwedoheading1(e.target.value)}} />
<input type="text" className="form-control" placeholder="whatwedoheading2" value={whatwedoheading2} onChange={(e)=>{setwhatwedoheading2(e.target.value)}}  />
<input type="text" className="form-control" placeholder="whatwedoheading3"  value={whatwedoheading3} onChange={(e)=>{setwhatwedoheading3(e.target.value)}} />
<input type="text" className="form-control" placeholder="whatwedoheading4" value={whatwedoheading4} onChange={(e)=>{setwhatwedoheading4(e.target.value)}} />
<input type="text" className="form-control" placeholder="whatwedopara-1" value={whatwedopara1} onChange={(e)=>{setwhatwedopara1(e.target.value)}}  />
<input type="text" className="form-control" placeholder="whatwedopara-2"  value={whatwedopara2} onChange={(e)=>{setwhatwedopara2(e.target.value)}} />
<input type="text" className="form-control" placeholder="whatwedopara-3"  value={whatwedopara3} onChange={(e)=>{setwhatwedopara3(e.target.value)}} />
<input type="text" className="form-control" placeholder="whatwedopara-3"  value={whatwedopara4} onChange={(e)=>{setwhatwedopara4(e.target.value)}} />

<br/>

</div>

    

 

<div className="text-right">
 <button className=" btn-primary" onClick={handleAddcity}>Addcity</button>
</div>
   </div>

     



 
 </div>
       

       <div className="row">
        <div className="col-md-10">
          <h2>To add the City & Workation name in Dropdown Selection</h2>           
        <input type="text" className="form-control" placeholder="city name in smallcase"  value={value} onChange={(e)=>{setValue(e.target.value)}} />
        <input type="text" className="form-control" placeholder="city name in capitalcase"  value={label} onChange={(e)=>{setLabel(e.target.value)}} />
      
        <div className="text-right">
 <button className=" btn-primary" onClick={handleAddcityselection}>Add </button>
</div>

        </div>

       </div>

       

 </div>
);

}
   