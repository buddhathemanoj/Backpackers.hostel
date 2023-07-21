import React, { useEffect,useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Agra.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import polcy1 from '../Assets/Policies/policy1.svg'
import polcy2 from '../Assets/Policies/policy2.svg'
import polcy3 from '../Assets/Policies/polict3.svg'
import polcy4 from '../Assets/Policies/policy4.svg'
import polcy5 from '../Assets/Policies/policy5.svg'
import polcy from '../Assets/Policies/policy6.svg'
function Accordion() {


    const [activeButton, setActiveButton] = useState(null);


  useEffect(() => {
    const accordions = document.querySelectorAll('.accordion-button');
    accordions.forEach((accordion) => {
      accordion.addEventListener('click', function () {
        const collapse = this.getAttribute('data-bs-target');
        const isExpanded = this.getAttribute('aria-expanded') === 'true';

        if (isExpanded) {
          this.setAttribute('aria-expanded', 'false');
          document.querySelector(collapse).classList.remove('show');
          setActiveButton(null); 
        } else {
          this.setAttribute('aria-expanded', 'true');
          document.querySelector(collapse).classList.add('show');
          setActiveButton(this.id);
        }
      
      });
    });
  }, []);

  const buttonStyle = (buttonId) => {
    if (activeButton === buttonId) {
      return { backgroundColor: 'yellow' };
    }
    return {};
  };

  return (
    <div className='policymain'>
    <p className='mainpara'>IMPORTANT INFORMATIONS</p>
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingOne">
          <button
             id="buttonOne"
             className={`accordion-button collapsed ${activeButton === 'buttonOne' ? 'active' : ''}`}
            
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
           
            style={buttonStyle('buttonOne')}
          >
           Important Timings
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className='mainpolicydiv'>
           <div className='policy1stbox'>
           <img className='imgpolicy' src={polcy1} alt='jnv'/>
            <div className='parabelowpicpolcy'>
                <p>Check-In</p>
                <p>1PM</p>
            </div>
            </div>
            <div className='policy1stbox'>
           <img className='imgpolicy' src={polcy2} alt='jnv'/>
            <div className='parabelowpicpolcy'>
                <p>CheckOut</p>
                <br/>
                <p>11AM</p>
            </div>
           </div>
           <div className='policy1stbox'>
           <img className='imgpolicy' src={polcy3} alt='jnv'/>
            <div className='parabelowpicpolcy'>
                <p>GuestVisit</p>
                <p>10AM - 8PM</p>
            </div>
           </div>
           <div className='policy1stbox'>
           <img className='imgpolicy' src={polcy4} alt='jnv'/>
            <div className='parabelowpicpolcy'>
                <p>Cafe</p>
                <p>7AM-10PM</p>
            </div>
           </div>
           <div className='policy1stbox'>
           <img className='imgpolicy' src={polcy5} alt='jnv'/>
            <div className='parabelowpicpolcy'>
                <p>Reception</p>
                <p>24 Hours</p>
            </div>
           </div>
           <div className='policy1stbox'>
           <img className='imgpolicy' src={polcy} alt='jnv'/>
            <div className='parabelowpicpolcy'>
                <p>Common-Area</p>
                <p>24 Hours</p>
            </div>
           </div>
           </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
          id="buttontwo"
          className={`accordion-button collapsed ${activeButton === 'buttontwo' ? 'active' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
            style={buttonStyle('buttontwo')}
          >
            Health and Safety
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div>
                
                <ul style={{listStyle:"none", textAlign:'initial',lineHeight:'2.2rem'}}>
       <li>
        <FontAwesomeIcon  style={{ marginRight: '13px' }} icon={faTree} />    A travel package worth <b> ₹4999/-</b>
      </li>
      <li>
        <FontAwesomeIcon icon={faTree} style={{ marginRight: '13px' }} />
        Strictly mandatory to follow all Covid guidelines as mandated by GOI at all times during the stay. For more details, refer to our policies.
      </li>
      <li>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        We have a doctor, ambulance, or such facilities on call in case of any emergency.
      </li>
      <li>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        All common spaces at the hostel are CCTV secured.
      </li>
     
                </ul>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
             id="buttonthree"
            className={`accordion-button collapsed ${activeButton === 'buttonthree' ? 'active' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
            style={buttonStyle('buttonthree')}
          >
           Guest Policy
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div>
                <ul style={{listStyle:'none' , textAlign:'initial'}}>
                <li>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        The Hosteller reserves the right to admission based on the discretion of the management.
      </li>
      <li>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        For all guest-related policies, refer to the policies which can be located on the main page.
      </li>
     
                </ul>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div className="accordion-item">
        <h2 className="accordion-header" id="flush-headingFour">
          <button
             id="buttonfour"
            className={`accordion-button collapsed ${activeButton === 'buttonfour' ? 'active' : ''}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseFour"
            aria-expanded="false"
            aria-controls="flush-collapseFour"
            style={buttonStyle('buttonfour')}
          >
            FAQS
          </button>
        </h2>
        <div
          id="flush-collapseFour"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingFour"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <div className='mainfaq'>
            <div className='faqbox'>
                
            <ul className='faqlist'>
                <li className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
      <b> What is the location of The Hosteller Agra?</b> <br/>

The Hosteller Agra is located in Amarlok Colony, Taj Nagari Phase 1, Agra, Uttar Pradesh 282001.
      </li>
      <li   className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
       <b>Which is the nearest railway station?</b> <br/>

Agra Fort Station is approximately 5 km from the hostel.      </li>

<li  className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>  Is there an in-house cafe?</b> <br/>

Yes, we have an in-house cafe.     </li>

<li  className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>  Is breakfast included in the room rate?</b> <br/>

If breakfast is included, it will display "Breakfast Included" below the room type. If it is not mentioned, breakfast is not included.     </li>

<li  className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>  What are some of the nearby places to visit?</b> <br/>

Famous for the Taj Mahal, you can tour the local markets, tour the capital city, go bird watching at Bharatpur and enjoy the street food.     </li>

<li  className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>  Does the hostel have Wifi?</b> <br/>

Yes, our wifi has a good speed and you can plan your workation here.     </li>

<li  className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>  Are there lockers in the dorms?</b> <br/>

We provide lockers in the dormitories only. Every bed has an attached locker for guests to keep their valuables. It is advised that you carry a lock for the locker if needed. However, availing a padlock from the reception will be subject to availability and at an additional cost. It is advised that you carry a lock.     </li>

<li  className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>  Does the hostel have parking?</b> <br/>

Yes, the hostel has a parking lot but it's subject to availability.     </li>

<li  className='listsylefaq'> 
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>  Does the hostel have AC in rooms?</b> <br/>

Yes, all rooms have air conditioning.     </li>
     
                </ul>

            </div>
            <div className='faqbox'>
           
            <ul  className='faqlist'>
                <li  className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>   Which is the nearest airport?</b> <br/>

Delhi Airport is the nearest airport to the hostel.      </li>
      <li className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>   What is the best time to visit?</b> <br/>

The best time to visit Agra is during the winter months as the heat is less. If you want to enjoy fewer crowds, do visit it during the monsoon.      </li>
     
<li className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>   Is the hostel pet-friendly?</b> <br/>

Yes, pets are allowed in the hostel. However, pets are allowed in private rooms only and not dorms.      </li>

<li className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b> Is smoking allowed inside the property?</b> <br/>

Smoking is allowed only in the designated smoking areas and not in any rooms or indoor common areas.    </li>

<li className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>   Do the rooms have attached washrooms?</b><br/>

Yes, all rooms and dorms have an attached washroom.     </li>

<li className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>  Is the hostel available for special events?</b> <br/>

Yes, you can send an email to contact@thehosteller.com      </li>
<br/>


<li className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>   Is outside food allowed at the property?</b> <br/>

Guests can order & consume outside food in the designated dining areas and private rooms only.     </li>
<br/>
<br/>
<br/>
<li className='listsylefaq'>
        <FontAwesomeIcon style={{ marginRight: '13px' }} icon={faTree} />
        <b>   Is power backup available in your property?</b><br/>

Yes, power backup is available.    </li>

                </ul>
                
            </div>
            </div>
          </div>
          <hr/>
        </div>
      </div>





    </div>
    </div>
  );
}

export default Accordion;
