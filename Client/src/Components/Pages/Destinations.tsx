// import React from 'react'
// import Navbar from './Navbar'
// import Mobilenav from './Mobilenav'
// import Mainnav from './Mainnav'
// export default function Destinations() {
//   return (
//     <div>
//       <Navbar/>
      

// <br/>
// <br/>

// <Mainnav/>






      


//     </div>
//   )
// }


import React, { useEffect, useState } from 'react';

const Destinations = () => {
  const [systemWidth, setSystemWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSystemWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      
      <p>System Width: {systemWidth}px</p>



    
    </div>
  );
};

export default Destinations;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';




// export default function Destinations() {
//     const [state, setState] = React.useState({
//       bottom: false,
//       showSummary: false, // Add a state variable to track the visibility of the summary
//     });
  
//     const toggleDrawer = (anchor: Anchor, open: boolean) => (
//       event: React.KeyboardEvent | React.MouseEvent
//     ) => {
//       if (
//         event.type === 'keydown' &&
//         ((event as React.KeyboardEvent).key === 'Tab' ||
//           (event as React.KeyboardEvent).key === 'Shift')
//       ) {
//         return;
//       }
  
//       setState({ ...state, [anchor]: open, showSummary: true }); // Set showSummary to true when the button is clicked
//     };
  
//     const list = (anchor: Anchor) => (
//       <Box
//         sx={{ width: 250 }}
//         role="presentation"
//         onClick={toggleDrawer(anchor, false)}
//         onKeyDown={toggleDrawer(anchor, false)}
//       >
//         {state.showSummary && ( // Render the summary section only when showSummary is true
//           <>
//             <p>Payable amount: {amount}</p>
//             <p>Price: {price}</p>
//             <Button>View summary</Button>
//           </>
//         )}
//       </Box>
//     );
  
  //   return (
  //     <div>
  //       <Button onClick={toggleDrawer('bottom', true)}>Book now</Button>
  //       <Drawer
  //         anchor="bottom"
  //         open={state['bottom']}
  //         onClose={toggleDrawer('bottom', false)}
  //       >
  //         {list('bottom')}
  //       </Drawer>
  //     </div>
  //   );
  // }
  