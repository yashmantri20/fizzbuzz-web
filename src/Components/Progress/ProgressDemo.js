import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Progress } from 'fizzbuzz-ui';
import React from 'react';
import Code from '../CodeBlock/Code';

const ProgressDemo = () => {
  return (
    <Box id='progress' mb={4}>
      <Text fontSize={28} fontWeight={600} mt={8} letterSpacing={1}>
        Progress
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        Progress is used to display the progress status for a task that takes a
        long time or consists of several steps.
      </Text>

      <Text fontSize={24} fontWeight={600} mt={6}>
        Import
      </Text>

      <Code text='import { Progress } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Usage
      </Text>

      <Progress />

      <Code text={` <Progress /> `} />


      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Progress Variant
      </Text>

      <Progress type='striped' style={{ marginBottom: '12px' }} />
      <Progress type='primary' style={{ marginBottom: '12px' }} />

      <Code text={`   
      <Progress type='striped' />

      <Progress type='primary' /> 
      `} />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Progress Color
      </Text>

      <Progress type='primary' bg='#a8dadc' style={{ marginBottom: '12px' }} />
      <Progress type='primary' bg='#457b9d' style={{ marginBottom: '12px' }} />
      <Progress type='striped' bg='#1d3557' style={{ marginBottom: '12px' }} />

      <Code text={`   
     <Progress type='primary' bg='#a8dadc' />

     <Progress type='primary' bg='#457b9d' />

     <Progress type='striped' bg='#1d3557' />
      `} />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Progress Value
      </Text>

      <Progress type='primary' bg='#a8dadc' value='50' style={{ marginBottom: '12px' }} />
      <Progress type='striped' bg='#457b9d' value='60' style={{ marginBottom: '12px' }} />
      <Progress type='primary' bg='#1d3557' value='70' style={{ marginBottom: '12px' }} />

      <Code text={`   
       <Progress type='primary' bg='#a8dadc' value='50' />

       <Progress type='striped' bg='#457b9d' value='60' />

       <Progress type='primary' bg='#1d3557' value='70' />
      `} />

    </Box>
  );
};

export default ProgressDemo;
