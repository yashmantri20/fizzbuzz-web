import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import Code from '../CodeBlock/Code';
import { Alert } from 'fizzbuzz-ui';
import { AiFillWarning } from 'react-icons/ai';

const AlertDemo = () => {
  return (
    <Box id='alert'>
      <Text fontSize={28} fontWeight={700} mt={8}>
        Components
      </Text>
      <Text fontSize={24} fontWeight={600} mt={8} letterSpacing={1}>
        Alert
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        Alerts are used to communicate a state that affects a system, feature or
        page.
      </Text>

      <Text fontSize={24} fontWeight={600} mt={6}>
        Import
      </Text>

      <Code text='import { Alert } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={600} mt={6}>
        Usage
      </Text>
      <Alert
        status='error'
        variant='solid'
        title='Your browser is outdated!'
        text='Your FizzBuzz experience may be degraded.'
      />

      <Code
        text={`<Alert status='error' variant='solid' title='Your browser is outdated!' text='Your FizzBuzz experience may be degraded.' />`}
      />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Status
      </Text>

      <Alert
        status='success'
        variant='solid'
        text='Data uploaded to the server.'
      />

      <Alert status='error' variant='solid' text='There was an error' />

      <Alert status='info' variant='solid' text='FizzBuzz is live!.' />

      <Alert status='warning' variant='solid' text='Upgrade your account.' />

      <Code
        text={`
    <Alert status='success' variant='solid' text='Data uploaded to the server.'/>

    <Alert status='error' variant='solid' text='There was an error' />

    <Alert status='info' variant='solid' text='FizzBuzz is live!.' />

    <Alert status='warning' variant='solid' text='Upgrade your account.' />
        `}
      />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Alert Variants
      </Text>

      <Alert status='info' variant='solid' text='FizzBuzz is live!.' />

      <Alert
        status='warning'
        variant='top-accent'
        text='Upgrade your account.'
      />

      <Alert
        status='success'
        variant='left-accent'
        text='Data uploaded to the server.'
      />

      <Code
        text={`
    <Alert status='info' variant='solid' text='FizzBuzz is live!.' />

    <Alert status='warning' variant='top-accent' text='Upgrade your account.' />

    <Alert status='success' variant='left-accent' text='Data uploaded to the server.' />
        `}
      />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Change Icons
      </Text>

      <Alert status='warning' variant='top-accent' text='Upgrade your account.'>
        <AiFillWarning color='#dd6b20' size={24} />
      </Alert>

      <Code
        text={`
      <Alert status='warning' variant='top-accent' text='Upgrade your account.'>
          <AiFillWarning />
      </Alert>
        `}
      />
    </Box>
  );
};

export default AlertDemo;
