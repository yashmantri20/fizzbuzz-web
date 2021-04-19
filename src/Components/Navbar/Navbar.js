import { Image } from '@chakra-ui/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import React from 'react';
import logo from './logo.png'
import './Navbar.css';

const Navbar = () => {
  return (
    <Box className='navbar' pt={2} px={20} >
      <Flex>
        <Image src={logo} width='70px' height='50px' flex='1' draggable={false} />
        <Text pl={2} my='auto' color='white' fontWeight={600} fontSize={24}>FizzBuzz</Text>
        <Box float='right' flex='28'>
          <a href='https://www.linkedin.com/in/yashmantri20/' target="_blank" rel="noreferrer">LinkedIn</a>
          <a href='https://github.com/yashmantri20' target="_blank" rel="noreferrer">Github</a>
        </Box>
      </Flex>

    </Box >
  );
};

export default Navbar;
