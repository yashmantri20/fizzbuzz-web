import { Flex } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Avatar } from 'fizzbuzz-ui';
import React from 'react';
import Code from '../CodeBlock/Code';

const AvatarDemo = () => {
  return (
    <div id='avatar'>
      <Text fontSize={28} fontWeight={600} mt={8} letterSpacing={1}>
        Avatar
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        The Avatar component is used to represent a user, and displays the
        profile picture, initials or fallback icon.
      </Text>

      <Text fontSize={24} fontWeight={600} mt={6}>
        Import
      </Text>

      <Code text='import { Avatar } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Usage
      </Text>

      <Flex>
        <Avatar name='Yash' style={{ marginRight: '15px' }} bgColor='orange' />
        <Avatar name='Sun' style={{ marginRight: '15px' }} />
        <Avatar name='Mantri' style={{ marginRight: '15px' }} bgColor='green' />
      </Flex>

      <Code
        text={`
        <Avatar name='Yash' bgColor='orange' />

        <Avatar name='S' />

        <Avatar name='Mantri' bgColor='green' />
      `}
      />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Avatar Sizes
      </Text>

      <Flex>
        <Avatar
          name='Yash'
          style={{ marginRight: '15px' }}
          bgColor='orange'
          size='xs'
        />
        <Avatar name='Sun' style={{ marginRight: '15px' }} size='sm' />
        <Avatar
          name='Mantri'
          style={{ marginRight: '15px' }}
          bgColor='green'
          size='md'
        />
        <Avatar
          name='Yash'
          style={{ marginRight: '15px' }}
          bgColor='orange'
          size='lg'
        />
        <Avatar name='Sun' style={{ marginRight: '15px' }} size='xl' />
      </Flex>

      <Code
        text={`
      <Avatar name='Yash' bgColor='orange' size='xs' />

      <Avatar name='S' size='sm' />

      <Avatar name='Mantri' bgColor='green' size='md' />

      <Avatar name='Yash' bgColor='orange' size='lg' />

      <Avatar name='S' size='xl' />
      `}
      />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Avatar Variants
      </Text>

      <Flex>
        <Avatar name='Yash' style={{ marginRight: '15px' }} />
        <Avatar
          src='https://picsum.photos/200/300'
          style={{ marginRight: '15px' }}
        />
        <Avatar />
      </Flex>

      <Code
        text={`
        <Avatar name='Yash' />
        
        <Avatar src='https://picsum.photos/200/300' />

        <Avatar />
      `}
      />
    </div>
  );
};

export default AvatarDemo;
