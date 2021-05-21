import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import { Box, Flex, Text } from '@chakra-ui/layout';
import Navbar from './Components/Navbar/Navbar';
import DrawerComp from './Components/Navbar/Drawer';
import Main from './Components/Main';
import { Image } from '@chakra-ui/image';
import logo from './Components/Navbar/logo.png'
import GithubRibbon from './Utils/GithubRibbon';

function App() {
  return (
    <>
      <GithubRibbon />
      <Box style={{ height: '140vh' }} className='desktop'>
        <Navbar />
        <Box>
          <Sidebar />
        </Box>
      </Box>

      <Box className='mobile'>
        <Box className='mobile-navbar' pt='6px'>
          <Flex>
            <Image src={logo} width='70px' height='50px' flex='1' draggable={false} />
            <Text pl={1} my='auto' color='white' fontWeight={600} fontSize={20}>FizzBuzz</Text>
            <Box flex='20' pt='6px'>
              <DrawerComp />
            </Box>
          </Flex>

        </Box>

        <Box p={4}>
          <Main />
        </Box>
      </Box>
    </>

  );
}

export default App;
