// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='bg-blue-500 p-4 flex justify-between text-white font-medium'>
//         <div className='flex gap-4'>
//           <p>HOME</p>
//           <p>ABOUT US</p>
//           <p>PRODUCTS</p>
//           <p>SERVICES</p>
//           <p>CLIENTS</p>
//         </div>
//         <div>
//           <p>CONTACT US</p>
//         </div>
//     </div>
//   )
// }
// export default Navbar

import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>HOME</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>ABOUT US</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>PRODUCTS</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>SERVICES</Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }}>CLIENTS</Typography>
        </Box>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          CONTACT US
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
