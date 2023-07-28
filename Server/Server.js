const express = require('express');
const cors = require('cors');
const app = express();
const dbConfig = require('./db')
const rooomsRoute = require('./Route/roomsRoute');
const usersRoute = require('./Route/userRoute')
const bookingsRoute =require('./Route/bookingsRoute')
const cityRoute = require('./Route/cityRoute')
const checkinRoute = require('./Route/CheckinRoute')
const WorkationCheckinRoute = require('./Route/WorkcheckinRoute')
app.use(cors("*"));
app.use(express.json())

app.use('/api/rooms', rooomsRoute )
app.use('/api/users', usersRoute )
app.use ('/api/bookings' , bookingsRoute)
app.use("/api/city" , cityRoute )
app.use("/api/checkin" , checkinRoute )
app.use("/api/work/checkin" , WorkationCheckinRoute ) 
 

const port = process.env.PORT || 5001;

app.listen(port ,()=>console.log('server iss started') );