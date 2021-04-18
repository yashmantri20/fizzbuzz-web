import { Box } from '@chakra-ui/layout';
import React from 'react';
import AlertDemo from './Alert/AlertDemo';
import AvatarDemo from './Avatar/AvatarDemo';
import ButtonDemo from './Button/ButtonDemo';
import ImageDemo from './Image/ImageDemo';
import Installation from './Installation/Installation';
import SpinnerDemo from './Loader/LoaderDemo';
import ProgressDemo from './Progress/ProgressDemo';
import ScrollToTopDemo from './ScrollToTop/ScrollToTopDemo';
import TooltipDemo from './Tooltip/TooltipDemo';

const Main = () => {
  return (
    <Box>
      <Installation />
      <AlertDemo />
      <ButtonDemo />
      <AvatarDemo />
      <ScrollToTopDemo />
      <TooltipDemo />
      <ImageDemo />
      <SpinnerDemo />
      <ProgressDemo />
    </Box>
  );
};

export default Main;
