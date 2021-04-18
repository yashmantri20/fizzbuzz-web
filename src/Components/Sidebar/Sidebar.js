import { Text } from '@chakra-ui/layout';
import React, { useState } from 'react';
import AlertDemo from '../Alert/AlertDemo';
import AvatarDemo from '../Avatar/AvatarDemo';
import ButtonDemo from '../Button/ButtonDemo';
import ImageDemo from '../Image/ImageDemo';
import Installation from '../Installation/Installation';
import SpinnerDemo from '../Loader/LoaderDemo';
import ProgressDemo from '../Progress/ProgressDemo';
import ScrollToTopDemo from '../ScrollToTop/ScrollToTopDemo';
import './Sidebar.css';
import TooltipDemo from '../Tooltip/TooltipDemo';
import { Link } from 'react-scroll';
import Main from '../Main';

const Sidebar = () => {
  return (
    <div className='container'>
      <div className='left-half'>
        <Text
          fontSize={[12, 14, 16, 20]}
          fontWeight={600}
          mt={16}
          letterSpacing={1}
        >
          GETTING STARTED
        </Text>
        <Link to='start' spy={true} smooth={true} duration={1000} offset={-70}>
          <Text className='txt-comp'>Installation</Text>
        </Link>

        <Text
          fontSize={[12, 14, 16, 20]}
          fontWeight={600}
          mt={8}
          letterSpacing={1}
        >
          COMPONENTS
        </Text>
        <Link to='alert' spy={true} smooth={true} duration={1000}>
          <Text className='txt-comp'>Alert</Text>
        </Link>

        <Link to='button' spy={true} smooth={true} offset={-70} duration={1000}>
          <Text className='txt-comp'>Button</Text>
        </Link>

        <Link to='avatar' spy={true} smooth={true} offset={-70} duration={1000}>
          <Text className='txt-comp'>Avatar</Text>
        </Link>

        <Link
          to='scrolltop'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Text className='txt-comp'>Scroll To Top</Text>
        </Link>

        <Link
          to='tooltip'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Text className='txt-comp'>Tooltip</Text>
        </Link>

        <Link to='image' spy={true} smooth={true} offset={-70} duration={1000}>
          <Text className='txt-comp'>Image</Text>
        </Link>

        <Link
          to='spinner'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Text className='txt-comp'>Loader</Text>
        </Link>

        <Link
          to='progress'
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <Text className='txt-comp'>Progress Bar</Text>
        </Link>
      </div>
      <div className='right-half'>
        {window.innerWidth > 681 ? <Main /> : ''}
      </div>
    </div>
  );
};

export default Sidebar;
