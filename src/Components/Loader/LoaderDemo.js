import { Text } from '@chakra-ui/layout';
import React from 'react';
import Code from '../CodeBlock/Code';

const SpinnerDemo = () => {
  return (
    <div id='spinner'>
      <Text fontSize={24} fontWeight={500} mt={4} letterSpacing={1}>
        Spinner
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        Spinners provide a visual cue that an action is either processing,
        awaiting a course of change or a result.
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

export default SpinnerDemo;
