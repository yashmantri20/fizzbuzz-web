import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Text,
} from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-scroll';

const DrawerComp = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button colorScheme='gray' onClick={onOpen} float='right'>
        <GiHamburgerMenu size='20px' />
      </Button>

      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>FizzBuzz Ui Library</DrawerHeader>

            <DrawerBody>
              <Text fontSize={20} fontWeight={600} mt={4} letterSpacing={1}>
                GETTING STARTED
              </Text>
              <Link
                to='start'
                spy={true}
                smooth={true}
                duration={1000}
                offset={-70}
                onClick={onClose}
              >
                <Text className='txt-comp'>Installation</Text>
              </Link>

              <Text fontSize={20} fontWeight={600} mt={8} letterSpacing={1}>
                COMPONENTS
              </Text>
              <Link
                to='alert'
                spy={true}
                smooth={true}
                duration={1000}
                onClick={onClose}
              >
                <Text className='txt-comp'>Alert</Text>
              </Link>

              <Link
                to='button'
                spy={true}
                smooth={true}
                duration={1000}
                offset={-70}
                onClick={onClose}
              >
                <Text className='txt-comp'>Button</Text>
              </Link>

              <Link
                to='avatar'
                spy={true}
                smooth={true}
                offset={-70}
                onClick={onClose}
                duration={1000}
              >
                <Text className='txt-comp'>Avatar</Text>
              </Link>

              <Link
                to='scrolltop'
                spy={true}
                smooth={true}
                offset={-70}
                onClick={onClose}
                duration={1000}
              >
                <Text className='txt-comp'>Scroll To Top</Text>
              </Link>

              <Link
                to='tooltip'
                spy={true}
                smooth={true}
                offset={-70}
                onClick={onClose}
                duration={1000}
              >
                <Text className='txt-comp'>Tooltip</Text>
              </Link>

              <Link
                to='image'
                spy={true}
                smooth={true}
                offset={-70}
                onClick={onClose}
                duration={1000}
              >
                <Text className='txt-comp'>Image</Text>
              </Link>

              <Link
                to='spinner'
                spy={true}
                smooth={true}
                offset={-70}
                onClick={onClose}
                duration={1000}
              >
                <Text className='txt-comp'>Loader</Text>
              </Link>

              <Link
                to='progress'
                spy={true}
                smooth={true}
                offset={-70}
                onClick={onClose}
                duration={1000}
              >
                <Text className='txt-comp'>Progress Bar</Text>
              </Link>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </div>
  );
};

export default DrawerComp;
