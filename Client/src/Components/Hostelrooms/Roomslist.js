
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Bookroom.css";
import { Modal, Button, Carousel } from "react-bootstrap";



export const Roomslist = ({ room , fromdate, todate }) => {
  const [show, setShow] = useState(false);
const [showSummaryBox, setShowSummaryBox] = useState(false);
const handleShowSummaryBox = () => setShowSummaryBox(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div>

    <div className="row boxshaows ">
      <div key={room._id} className="col-md-6">
        <img src={room.imageurls[0]} className="smallimghostel" />
      </div>
      <div id="roomdetailss" className="col-md-6">
        <h1>{room.name}</h1>
        <p>Max Count :{room.maxcount}</p>
        <p>Rent/Day : {room.rentperday}</p>
        <div className="buttonss" style={{ float: "right" }}>
        <Link to={'/book/' + room._id + '?fromdate=' + fromdate + '&todate=' + todate}>
  <button className="btn-primary">Book Now</button>
</Link>
          <button className="btn-primary " onClick={handleShow}>
            {" "}
            View Details
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size="lg">
        
        <Modal.Body>
          <div className="row ">
            <div className="col-md-6">
 <Carousel key={room._id}>
            {room.imageurls.map((url) => {
              return (
                <Carousel.Item>
                  <img className="d-block w-100 bigimgcaro" src={url} />
                </Carousel.Item>
              );
            })}
          </Carousel>
            </div>
            <div key={room._id} className="col-md-6">
             <h3>{room.name}</h3> 
             <hr/>
             <h6>Amenities</h6>
           
             <hr/>
             <div className="d-flex" >
             <ul style={{ listStyle: 'none', padding: 0 ,marginRight:'30px'}}>
  {room.amenity.slice(0, room.amenity.length / 2).map((amenity, index) => (
    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
      <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faCheckCircle} />
      {amenity}
    </li>
  ))}
</ul>
      <ul style={{listStyle:'none', padding: 0 }}>
        {room.amenity.slice(room.amenity.length / 2).map((amenity, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}> <FontAwesomeIcon style={{ marginRight: '5px' }} icon={faCheckCircle} />{amenity}</li>
        ))}
      </ul>
             </div>
             
    </div>
    

          </div>
         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

 
    </div>
  );
};

