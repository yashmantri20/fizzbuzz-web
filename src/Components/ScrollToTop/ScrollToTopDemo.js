import { Text } from '@chakra-ui/layout';
import React from 'react';
import Code from '../CodeBlock/Code';

const ScrollToTopDemo = () => {
  return (
    <div id='scrolltop'>
      <Text fontSize={24} fontWeight={500} mt={4} letterSpacing={1}>
        Scroll To Top
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        Scroll To Top makes it easy to go back to the top of the page.
      </Text>

      <Text fontSize={24} fontWeight={500} mt={6}>
        Import
      </Text>

      <Code text='import { Alert } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={500} mt={6}>
        Usage
      </Text>
    </div>
  );
};

export default ScrollToTopDemo;
