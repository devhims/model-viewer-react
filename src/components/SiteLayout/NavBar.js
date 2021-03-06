import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { Link } from 'react-router-dom';
import ThemeSelector from '../../utilis/ThemeSelector';

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const NavBar = (props) => {
  const [show, setShow] = useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
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
        <Link to="/arlink">
          <MenuItems>AR Link</MenuItems>
        </Link>
        <Link to="/comfycouchfs">
          <MenuItems>AR FS</MenuItems>
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
