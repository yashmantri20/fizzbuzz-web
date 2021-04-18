import { Box, Text } from '@chakra-ui/layout';
import { Button } from 'fizzbuzz-ui';
import React from 'react';
import Code from '../CodeBlock/Code';

const ButtonDemo = () => {
  return (
    <Box id='button'>
      <Text fontSize={24} fontWeight={600} mt={8} letterSpacing={1}>
        Button
      </Text>

      <Text fontSize={20} fontWeight={400} mt={2}>
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </Text>

      <Text fontSize={24} fontWeight={600} mt={6}>
        Import
      </Text>

      <Code text='import { Button } from "fizzbuzz-ui"' />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Usage
      </Text>

      <Button variant='primary' colorScheme='teal' />

      <Code text={`<Button variant='primary' colorScheme='teal' />`} />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Button Sizes
      </Text>

      <Button
        variant='primary'
        colorScheme='teal'
        size='xs'
        style={{ marginRight: '15px' }}
      />
      <Button
        variant='primary'
        colorScheme='teal'
        size='sm'
        style={{ marginRight: '15px' }}
      />
      <Button
        variant='primary'
        colorScheme='teal'
        size='md'
        style={{ marginRight: '15px' }}
      />
      <Button
        variant='primary'
        colorScheme='teal'
        size='lg'
        style={{ marginRight: '15px', marginTop: '8px' }}
      />
      <Code
        text={`
      <Button variant='primary' colorScheme='teal' size='xs' />
      
      <Button variant='primary' colorScheme='teal' size='sm' />

      <Button variant='primary' colorScheme='teal' size='md' />

      <Button variant='primary' colorScheme='teal' size='lg' />
      `}
      />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Button Sizes
      </Text>

      <Button
        variant='primary'
        colorScheme='teal'
        size='md'
        rounded='sm'
        style={{ marginRight: '15px' }}
      />
      <Button
        variant='primary'
        colorScheme='teal'
        size='md'
        rounded='md'
        style={{ marginRight: '15px' }}
      />

      <Button
        variant='primary'
        colorScheme='teal'
        size='md'
        rounded='lg'
        style={{ marginRight: '15px' }}
      />

      <Code
        text={`
      <Button variant='primary' colorScheme='teal' size='md' rounded='sm' />

      <Button variant='primary' colorScheme='teal' size='md' rounded='md' />

      <Button variant='primary' colorScheme='teal' size='md' rounded='lg' />
      `}
      />

      <Text fontSize={24} fontWeight={600} mt={6} mb={4}>
        Button Variants
      </Text>

      <Button
        variant='primary'
        colorScheme='teal'
        style={{ marginRight: '15px' }}
      />

      <Button
        variant='outline'
        colorScheme='teal'
        style={{ marginRight: '15px' }}
      />
      <Button
        variant='ghost'
        colorScheme='teal'
        style={{ marginRight: '15px' }}
      />
      <Button
        variant='link'
        colorScheme='teal'
        style={{ marginRight: '15px' }}
      />

      <Code
        text={`
        <Button variant='primary' colorScheme='teal' />

        <Button variant='outline' colorScheme='teal' />

        <Button variant='ghost' colorScheme='teal' />
        
        <Button variant='link' colorScheme='teal' />
      `}
      />
    </Box>
  );
};

export default ButtonDemo;
