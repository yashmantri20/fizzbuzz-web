import { Text } from '@chakra-ui/layout';
import { ScrollTop } from 'fizzbuzz-ui';
import React from 'react';
import Code from '../CodeBlock/Code';

const ScrollToTopDemo = () => {
  return (
    <div id='scrolltop'>
      <Text fontSize={28} fontWeight={600} mt={8} letterSpacing={1}>
        Scroll To Top
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        Scroll To Top makes it easy to go back to the top of the page.
      </Text>

      <Text fontSize={24} fontWeight={600} mt={6}>
        Import
      </Text>

      <Code text='import { ScrollTop } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={600} mt={6}>
        Usage
      </Text>

      {/* <ScrollTop /> */}
      <Code text='<ScrollTop />' />

      <Text fontSize={24} fontWeight={600} mt={6}>
        Scroll To Top Color
      </Text>

      <ScrollTop bg='#2b2b2b' />
      <Code text={`<ScrollTop bg='#457b9d' />`} />

    </div>
  );
};

export default ScrollToTopDemo;
