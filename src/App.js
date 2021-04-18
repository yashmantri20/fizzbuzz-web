import './App.css';
import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import Installation from './Components/Installation/Installation';
import AlertDemo from './Components/Alert/AlertDemo';
import ButtonDemo from './Components/Button/ButtonDemo';
import AvatarDemo from './Components/Avatar/AvatarDemo';
import ScrollToTopDemo from './Components/ScrollToTop/ScrollToTopDemo';
import TooltipDemo from './Components/Tooltip/TooltipDemo';
import ImageDemo from './Components/Image/ImageDemo';
import SpinnerDemo from './Components/Loader/LoaderDemo';
import ProgressDemo from './Components/Progress/ProgressDemo';
import { Box } from '@chakra-ui/layout';
import Navbar from './Components/Navbar/Navbar';
import DrawerComp from './Components/Navbar/Drawer';
import Main from './Components/Main';

function App() {
  return (
    <>
      <Box style={{ height: '140vh' }} className='desktop'>
        <Navbar />
        <Box>
          <Sidebar />
        </Box>
      </Box>

      <Box className='mobile'>
        <Box className='mobile-navbar' pt='6px'>
          <DrawerComp />
        </Box>

        <Box p={4}>
          <Main />
        </Box>
      </Box>
    </>
    // <>

    // </>
  );
}

export default App;
