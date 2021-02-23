import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Text,
  Button,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import { HamburgerIcon } from '@chakra-ui/icons';

import ThemeSelector from './ThemeSelector';

import { Link } from 'react-router-dom';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const NavBar = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="baseline"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      {...props}
    >
      <ThemeSelector />
      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon w={6} h={6} />
      </Box>

      <Box
        display={{ base: show ? 'flex' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        justifyContent={{ base: 'flex-start', md: 'flex-end' }}
        alignItems="baseline"
        flexGrow={1}
        flexWrap="wrap"
      >
        <Link to="/">
          <MenuItems>Home</MenuItems>
        </Link>
        <Link to="/comfycouch">
          <MenuItems>Card with QR Code</MenuItems>
        </Link>
        <Link to="/couchar">
          <MenuItems>Simple AR Card</MenuItems>
        </Link>
        <Link to="/arbutton">
          <MenuItems>AR Button</MenuItems>
        </Link>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'block' }}
        mt={{ base: 4, md: 0 }}
      ></Box>
    </Flex>
  );
};

export default NavBar;
