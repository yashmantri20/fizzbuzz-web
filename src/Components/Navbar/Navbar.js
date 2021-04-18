import { Box } from '@chakra-ui/layout';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <Box className='navbar'>
      <a href='#contact'>LinkedIn</a>
      <a href='#contact'>Github</a>
    </Box>
  );
};

export default Navbar;
