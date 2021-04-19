import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Spinner } from 'fizzbuzz-ui';
import React from 'react';
import Code from '../CodeBlock/Code';

const SpinnerDemo = () => {
  return (
    <div id='spinner'>
      <Text fontSize={28} fontWeight={600} mt={8} >
        Spinner
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        Spinners provide a visual cue that an action is either processing,
        awaiting a course of change or a result.
      </Text>

      <Text fontSize={24} fontWeight={600} mt={6}>
        Import
      </Text>

      <Code text='import { Spinner } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Usage
      </Text>

      <Flex>
        <Spinner size='sm' style={{ marginRight: '15px' }} />
        <Spinner size='md' style={{ marginRight: '15px' }} />
        <Spinner size='lg' style={{ marginRight: '15px' }} />
        <Spinner size='xl' style={{ marginRight: '15px' }} />
      </Flex>

      <Code text={` 
        <Spinner size='sm' />

        <Spinner size='md' />

        <Spinner size='lg' />

        <Spinner size='xl' />
      `} />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Spinner Color
      </Text>

      <Flex>
        <Spinner size='sm' bg='orange' style={{ marginRight: '15px' }} />
        <Spinner size='md' bg='blue' style={{ marginRight: '15px' }} />
        <Spinner size='lg' bg='green' style={{ marginRight: '15px' }} />
        <Spinner size='xl' bg='orange' style={{ marginRight: '15px' }} />
      </Flex>

      <Code text={` 
        <Spinner size='sm' bg='orange' />

        <Spinner size='md' bg='blue' />

        <Spinner size='lg' bg='green' />

        <Spinner size='xl' bg='orange' />
      `} />
    </div>
  );
};

export default SpinnerDemo;
