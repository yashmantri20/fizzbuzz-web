import { Text } from '@chakra-ui/layout';
import React from 'react';
import Code from '../CodeBlock/Code';

const ImageDemo = () => {
  return (
    <div id='image'>
      <Text fontSize={24} fontWeight={500} mt={4} letterSpacing={1}>
        Image
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        The Image component is used to display images.
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

export default ImageDemo;
