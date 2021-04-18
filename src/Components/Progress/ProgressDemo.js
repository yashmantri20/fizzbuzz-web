import { Text } from '@chakra-ui/layout';
import React from 'react';
import Code from '../CodeBlock/Code';

const ProgressDemo = () => {
  return (
    <div id='progress'>
      <Text fontSize={24} fontWeight={500} mt={4} letterSpacing={1}>
        Progress
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        Progress is used to display the progress status for a task that takes a
        long time or consists of several steps.
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

export default ProgressDemo;
