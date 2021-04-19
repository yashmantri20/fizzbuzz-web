import { Text } from '@chakra-ui/layout';
import React from 'react';
import Code from '../CodeBlock/Code';

const Installation = () => {
  return (
    <div id='start'>
      <Text fontSize={28} fontWeight={600} mt={20}>
        Getting Started
      </Text>
      <Text fontSize={28} fontWeight={600} mt={8} letterSpacing={1}>
        Installation
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        Inside your React project directory, install FizzBuzz UI by running
        either of the following:
      </Text>

      <Code text='npm i fizzbuzz-ui' />
      <Code text='yarn add fizzbuzz-ui' />
    </div>
  );
};

export default Installation;
