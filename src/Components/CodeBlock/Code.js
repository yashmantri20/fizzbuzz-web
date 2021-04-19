import { Box } from '@chakra-ui/layout';
import React from 'react';
import { a11yDark, CopyBlock } from 'react-code-blocks';

const Code = ({ text }) => {
  return (
    <Box mt={6}>
      <CopyBlock
        text={text}
        language='javascript'
        theme={a11yDark}
        showLineNumbers={false}
        codeBlock
      />
    </Box>
  );
};

export default Code;
