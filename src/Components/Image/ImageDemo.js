import { Box, Flex, SimpleGrid } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/layout';
import { Image } from 'fizzbuzz-ui';
import React from 'react';
import Code from '../CodeBlock/Code';
import './ImageDemo.css';

const ImageDemo = () => {
  return (
    <div id='image'>
      <Text fontSize={28} fontWeight={600} mt={8} letterSpacing={1}>
        Image
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        The Image component is used to display images.
      </Text>

      <Text fontSize={24} fontWeight={600} mt={6}>
        Import
      </Text>

      <Code text='import { Image } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Usage
      </Text>

      <Image src='https://picsum.photos/200/300' alt='image' />

      <Code text={`<Image src='https://picsum.photos/200/300' alt='image' />`} />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Image Sizes
      </Text>
      <Box className='imageround-desktop'>
        <Flex >
          <Image src='https://picsum.photos/200/300' alt='image' size='xs' style={{ marginRight: '15px' }} />
          <Image src='https://picsum.photos/200/300' alt='image' size='sm' style={{ marginRight: '15px' }} />
          <Image src='https://picsum.photos/200/300' alt='image' size='md' style={{ marginRight: '15px' }} />
          <Image src='https://picsum.photos/200/300' alt='image' size='lg' style={{ marginRight: '15px' }} />
        </Flex>
      </Box>

      <Box className='imageround-mobile'>
        <SimpleGrid columns={2} spacingY={6}>
          <Box m='auto'>
            <Image src='https://picsum.photos/200/300' alt='image' size='xs' style={{ marginRight: '15px' }} />
          </Box>
          <Box m='auto'>
            <Image src='https://picsum.photos/200/300' alt='image' size='sm' style={{ marginRight: '15px' }} />
          </Box>
          <Box m='auto'>
            <Image src='https://picsum.photos/200/300' alt='image' size='md' style={{ marginRight: '15px' }} />
          </Box>
          <Box m='auto'>
            <Image src='https://picsum.photos/200/300' alt='image' size='lg' style={{ marginRight: '15px' }} />
          </Box>
        </SimpleGrid>
      </Box>

      <Code text={` 
      <Image src='https://picsum.photos/200/300' alt='image' size='xs' />
      
      <Image src='https://picsum.photos/200/300' alt='image' size='sm' />
      
      <Image src='https://picsum.photos/200/300' alt='image' size='md' />
      
      <Image src='https://picsum.photos/200/300' alt='image' size='lg' />
      `} />


      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Image Rounded
      </Text>
      <Box className='imageround-desktop'>
        <Flex >
          <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='sm' style={{ marginRight: '15px' }} />
          <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='md' style={{ marginRight: '15px' }} />
          <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='lg' style={{ marginRight: '15px' }} />
          <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='full' style={{ marginRight: '15px' }} />
        </Flex>
      </Box>

      <Box className='imageround-mobile'>
        <SimpleGrid columns={2} spacingY={6} >
          <Box m='auto'>
            <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='sm' style={{ marginRight: '15px' }} />
          </Box>
          <Box m='auto'>
            <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='md' style={{ marginRight: '15px' }} />
          </Box>
          <Box m='auto'>
            <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='lg' style={{ marginRight: '15px' }} />
          </Box>
          <Box m='auto'>
            <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='full' style={{ marginRight: '15px' }} />
          </Box>
        </SimpleGrid>
      </Box>

      <Code text={` 
      <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='sm' />

      <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='md' />

      <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='lg' />

      <Image src='https://picsum.photos/200/300' alt='image' size='sm' rounded='full' />
      `} />
    </div>
  );
};

export default ImageDemo;
