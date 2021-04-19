import { Center } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Tooltip } from 'fizzbuzz-ui';
import React from 'react';
import Code from '../CodeBlock/Code';

const TooltipDemo = () => {
  return (
    <div id='tooltip'>
      <Text fontSize={28} fontWeight={600} mt={8} letterSpacing={1}>
        Tooltip
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        A tooltip is a brief, informative message that appears when a user
        interacts with an element. Tooltips are usually initiated in one of two
        ways: through a mouse-hover gesture or through a keyboard-hover gesture.
      </Text>

      <Text fontSize={24} fontWeight={600} mt={6}>
        Import
      </Text>

      <Code text='import { Alert } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Usage
      </Text>

      <Center>
        <Tooltip label='Made with ❤ by Yash' bg='green'>
          <p style={{ fontWeight: 800, fontSize: '22px' }}>Hover Me</p>
        </Tooltip>
      </Center>

      <Code
        text={`
      <Tooltip label='Made with ❤ by Yash' bg='green'>
          Hover Me
      </Tooltip>
      `}
      />
    </div>
  );
};

export default TooltipDemo;
