import React from 'react'
import Maincaro from './Maincaro'
import Mainnav from './Mainnav'
import { Footer } from './Footer'
import Featuredhostels from './Featuredhostels'
import '../Styles/Home.css'


import NEWSimg from '../Assets/newsltter.svg'
import CheckInForm from './Checkin'
export default function Home() {
  return (
    <div>
        <Mainnav/>
        <br/>
        <br/>
        <div className='stbar'>
            <h2 className='h1bar'> The SleepSafari commune membership program is now online</h2>
            <button className='btn1member'>Explore</button>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <Maincaro/>
        </div>
        <br/>
        <br/>
        <CheckInForm/>
        <br/>
        
        <br/>
         <h2 className='ftdhostel'>FEATURED HOSTELS</h2>
        <Featuredhostels/>

        <br/>
      
       <br/>

       <div className='newsletter'>
        <div className='mama'>
        
        <div className='newsword'>
        <img className='imgnews' src={NEWSimg} alt=''/>
        <div>
        <h1>Subscribe to our newsletter</h1>
          </div>
          </div>
          <div className='mama1'>
        <p>Receive updates about the latest launches, exclusive offers and more</p>
        <form className='formnews'>
        <input className='inputnews' type='email'placeholder='Enter your e-mail ID' ></input>
        <button className='btnnews' type='submit'>➡️</button>
        </form>
        </div>
        </div>
       </div>
 <br/>
 <br/>
 <br/>
 <Footer/>
    </div>
  )
}


// import React from 'react';
// import Maincaro from './Maincaro';
// import Mainnav from './Mainnav';
// import { Footer } from './Footer';
// import Featuredhostels from './Featuredhostels';
// import '../Styles/Home.css';
// import NEWSimg from '../Assets/newsltter.svg';
// import CheckInForm from './Checkin';

// export default function Home() {
//   return (
//     <div>
//       <Mainnav />
//       <br />
//       <br />
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12'>
//             <div className='stbar'>
//               <h2 className='h1bar'>
//                 The SleepSafari commune membership program is now online
//               </h2>
//               <button className='btn1member btn btn-dark'>Explore</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <div>
//         <Maincaro />
//       </div>
//       <br />
//       <br />
//       <CheckInForm />
//       <br />
//       <br />
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12'>
//             <h2 className='ftdhostel'>FEATURED HOSTELS</h2>
//           </div>
//         </div>
//         <div className='row'>
//           <div className='col-12'>
//             <Featuredhostels />
//           </div>
//         </div>
//       </div>
//       <br />
//       {/* <Destinationhome/> */}
//       <br />
//       <div className='container'>
//         <div className='row'>
//           <div className='col-12'>
//             <div className='newsletter'>
//               <img className='imgnews' src={NEWSimg} alt='' />
//               <div className='newsword'>
//                 <h1>Subscribe to our newsletter</h1>
//                 <p>
//                   Receive updates about the latest launches, exclusive offers
//                   and more
//                 </p>
//                 <form className='formnews'>
//                   <input
//                     className='inputnews form-control'
//                     type='email'
//                     placeholder='Enter your e-mail ID'
//                   />
//                   <button
//                     className='btnnews btn btn-success'
//                     type='submit'
//                   >
//                     ➡️
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <Footer />
//     </div>
//   );
// }
