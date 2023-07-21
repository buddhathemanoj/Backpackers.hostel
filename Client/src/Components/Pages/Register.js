import React, { useState, useEffect, useContext } from 'react'

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Mainnav from './Mainnav'
import Allpro from './Allpro';
import Accordion from './Policies';
import { Footer } from './Footer';
import '../Styles/Register.css'
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'; import { BookingContext } from './Bookingcontext';
import Loginform from './Login';
import Button from '@mui/material/Button'; 
const PopupContainer = styled('div')`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.5); /* semi-transparent overlay */
z-index: 9999;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 450px;
  z-index: 999;
`;
export const Register = () => {
 

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const { bookingData } = useContext(BookingContext);


  const [guestsChecked, setGuestsChecked] = useState(true);
  const [policiesChecked, setPoliciesChecked] = useState(false);

  const handleGuestsCheckboxChange = (event) => {
    setGuestsChecked(event.target.checked);
  };

  const handlePoliciesCheckboxChange = (event) => {
    setPoliciesChecked(event.target.checked);
  };

  const handleBookNowClick = () => {
    if (guestsChecked && policiesChecked) {
      // Add your logic to handle the book now action
      console.log('Booking confirmed!');
      setIsPopupOpen(true);
    }
  };
  const handleCloseClick = () => {
    setIsPopupOpen(false);
  };



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <div>
        <Mainnav />
      </div>

      <br />
      <br />
      <br />
      <div style={{ padding: '80px' }}>


        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}  sx={{
  display: 'block',
  '@media only screen and (min-width: 768px)': {
    display: 'flex',
  },
}} id='registermob'>
            <Grid className='grid1register' item xs={8}>
              <div id='emailbox'>
                <Item id='emaildappa' style={{ border: '1px solid', borderColor: 'lightcyan', boxShadow: '  0px 10px 42px 8px rgba(0,0,0,0.1)' }}>
                  <h3 style={{ textAlign: 'initial' }}>GUEST DETAILS</h3>
                  <form id='emailform' class="row g-3 needs-validation" novalidate>
                    <div id='options' class="col-md-2">
                      <label for="validationCustom04" class="form-label">TITLE</label>
                      <select  class="form-select" id="validationCustom04" equired='true'>
                        <option selected disabled value="">Mr</option>
                        <option>Mr.s</option>
                        <option>Miss</option>
                      </select>
                      <div class="invalid-feedback">
                        Please select .
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustom01" class="form-label">FIRST NAME</label>
                      <input type="text" class="form-control" id="validationCustom01" required='true' />
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustom02" class="form-label">LAST NAME</label>
                      <input type="text" class="form-control" id="validationCustom02" equired='true' />
                      <div class="valid-feedback">
                        Looks good!
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label for="validationCustom03" class="form-label">E-MAIL</label>
                      <input type="e-mail" class="form-control" id="validationCustom03" equired='true' />
                      <div class="invalid-feedback">
                        Please provide a valid city.
                      </div>
                    </div>
                    <div class="col-md-4">
                      <label for="validationCustomUsername" class="form-label">PHONE NUMBER</label>
                      <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend">@</span> */}
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" equired='true' />
                        <div class="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>



                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" equired='true' />
                        <label class="form-check-label" for="invalidCheck">
                          Agree to terms and conditions
                        </label>
                        <div class="invalid-feedback">
                          You must agree before submitting.
                        </div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary" type="submit">Submit form</button>
                    </div>
                  </form>



                </Item>
              </div>
            </Grid>
            <Grid id='summarybox' item xs={4}>
              <Item id='summarybox' style={{ border: '0.5px', borderColor: 'lightcyan', boxShadow: '  0px 10px 42px 8px rgba(0,0,0,0.1)' }}>
                <div className='Summarydiv'>
                  <h2>SUMMARY</h2>
                  <hr />
                  {bookingData && (
                    <div>
                      <p><b>Check in date: {bookingData.checkInDate}</b></p>
                      <p><b>Check out date: {bookingData.checkOutDate}</b></p>
                      <hr />
                      {bookingData.selectedBeds.map((bed, index) => (
                        bed.count > 0 && (
                          <p key={index}><b>
                            Selected {bed.roomType}: {bed.count}
                          </b></p>
                        )
                      ))}
                      <hr />
                      <p><b>Total taxes <Tooltip title="Room-Taxes">
                        <IconButton>
                          <InfoIcon />
                        </IconButton>
                      </Tooltip>  :&#8377;{bookingData.gstAmount}</b></p>


                      <p><b>Full amount: &#8377;{bookingData.fullAmount}</b></p>
                      <FormGroup>
                        <FormControlLabel control={<Checkbox

                          checked={guestsChecked}
                          onChange={handleGuestsCheckboxChange}
                          defaultChecked />}
                          label="Yes , I confirm All the Guests are above 18 years old," />
                        <FormControlLabel required control={<Checkbox
                          checked={policiesChecked}
                          onChange={handlePoliciesCheckboxChange}

                        />} label=" I acknowledge and accept all the Hostel Policies , Booking Policies and Cancellation Policies." />
                      </FormGroup>
                      <div className='btnbooknonwdiv'>
               <button className='booknowbtn' disabled={!guestsChecked || !policiesChecked}
                        onClick={handleBookNowClick}>BOOK NOW</button>
                      </div>
                      {isPopupOpen && (
        <div className="popup">
         <PopupContainer>
         <CloseButton  style={{color:'black' , fontSize:'20px'}} onClick={handleCloseClick}>X</CloseButton>
          <Loginform />
        </PopupContainer>
        </div>
      )}



                    </div>
                  )}
                </div>


              </Item>
            </Grid>
            <Grid id='miniprodiv' item xs={8}>
              <Item id='propbox' style={{  border: '1px solid', borderColor: 'lightcyan', boxShadow: '  0px 10px 42px 8px rgba(0,0,0,0.1)' }}>
                <h2 className='h2probox' style={{ textAlign: 'initial' }}>THE SLEEPSAFARI COMMUNE</h2>
                <p className='paraprobox' style={{ textAlign: 'initial' }}>Experience a world of exclusive perks and endless rewards with The SLEEPSAFARI Commune</p>
                <Allpro />
              </Item>
            </Grid>



            <Grid item xs={4}>
              <Item  id='coinsbox'>
                <div>
                  <h3 style={{ color: 'black'  , textAlign:'initial' , padding:'20px'}}>You will earn 899  < ShoppingBasketIcon />  Coins for this booking</h3>
                </div>
                <br />
                <br />
                <div style={{ borderRadius: '20px' }}>
                  <div style={{ display: 'flex', backgroundColor: '#FFF48A', padding: '22px', borderRadius: '15px 15px 0 0 ', justifyContent: 'space-between' }}>
                    <div >
                      <h3 style={{ fontSize: '30PX', color: 'black', marginTop: '5px' }}> Promo Codes  </h3>
                    </div>
                    <div>

                      <LocalOfferIcon style={{ height: '45px', width: '45px' }} />

                    </div>
                  </div>
                  <div id='promocard' style={{ display: 'flex', padding: '30px' , backgroundColor:'#efe4e4 ' ,borderRadius: '0 0 15px 15px'  }}>
                    <input className='' style={{ width: '420px', height: '40px', borderColor: ' gray', borderRadius: '15px 0 0 15px ' }} type='text' ></input>
                    <button style={{ width: '170px', fontSize: '18px', height: '41px', marginTop: '-2px', border: 'rgba(255, 255, 255, 0.248)', backgroundColor: 'yellow', borderRadius: '0 15px 15px 0' }}>Apply</button>
                  </div>
                </div>
              </Item>
            </Grid>


            <Grid item xs={8}>
              <Item  id='accorrd' className='accord'>
                <Accordion />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>






      <div>
        <Footer />
      </div>










    </div>
  )
}
