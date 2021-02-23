import '@google/model-viewer/';
import {
  Badge,
  Button,
  Text,
  Box,
  Center,
  Flex,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import PlaceIconWhite from '../assets/3diconWhite.png';
import React, { useRef, useEffect, useState } from 'react';

const ARCard = ({ name, img, glbLink, usdzLink, SkyBox }) => {
  const modelViewer = useRef(null);
  const arButton = useRef(null);
  const [displayMode, setDisplayMode] = useState('');
  const [hide, setHide] = useState(false);

  let output = null;

  // useEffect(() => {
  //   // console.log(modelViewer.current.shadowRoot.innerHTML);
  //   const val = modelViewer.current.shadowRoot.innerHTML.substring(4128, 4132);
  //   // console.log(modelViewer.current.getAttribute('ar-modes').mode);
  //   // console.log(modelViewer.current.shadowRoot.firstElementChild);
  //   // console.log(
  //   //   getComputedStyle(modelViewer.current.shadowRoot.firstElementChild).display
  //   // );
  //   // setDisplayMode(
  //   //   getComputedStyle(modelViewer.current.shadowRoot.firstElementChild).display
  //   // );
  //   val && setDisplayMode(val);
  // }, [modelViewer]);

  // useEffect(() => {
  //   if (arButton) {
  //     console.log(getComputedStyle(arButton.current));
  //     const style = getComputedStyle(arButton.current);
  //     const display = style.display;
  //     console.log(display);
  //   }
  // }, [arButton]);

  useEffect(() => {
    if (arButton) {
      //getAR();
      // console.log(isHidden(arButton.current));
      isHidden(arButton.current) ? setHide(true) : setHide(false);
    }
  }, [arButton]);

  const isHidden = (el) => {
    return el.offsetParent === null;
  };

  const getAR = async () => {
    try {
      output = await modelViewer.current.activateAR();
      console.log('ouput', output);
      console.log('ouput', modelViewer.current);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      className="ArCard"
      bgColor={mode('gray.200', 'gray.400')}
      m="0"
      p={{ base: '1', md: '2' }}
      textAlign="center"
      borderRadius={3}
      shadow="dark-lg"
      position="relative"
      overflow="hidden"
      w={{ base: '250px', sm: '270px', md: '300px' }}
      h={{ base: '350px', md: '400px' }}
    >
      <model-viewer
        ref={modelViewer}
        // reveal="interaction"
        loading="eager"
        src={glbLink}
        ios-src={usdzLink}
        poster={img}
        // alt={name}
        ar-modes="scene-viewer quick-look"
        auto-rotate
        camera-controls
        ar
        shadow-intensity="1"
        // skybox-image={SkyBox}
        // environment-image={SkyBox}
        environment-image="neutral"
        exposure={mode('2', '1')}
        ar-scale="auto"
        alt="A 3D model of some wall art"
      >
        <div id="progress" slot="progress-bar"></div>
        <Button
          ref={arButton}
          leftIcon={<Image src={PlaceIconWhite} w="15px" />}
          slot="ar-button"
          variant="solid"
          textTransform="uppercase"
          colorScheme="blue"
          position="absolute"
          bottom="4px"
          left="27%"
          height={6}
          className="myB"
          fontWeight="normal"
          ml={-3.5}
        >
          Launch AR
        </Button>
      </model-viewer>
      <Flex
        bg={mode('blue.500', 'blue.200')}
        position="absolute"
        right="-50px"
        top="2rem"
        width="200px"
        transform="rotate(45deg)"
        py={2}
        justifyContent="space-around"
        display={{ base: 'none', lg: 'flex' }}
      >
        <Text
          fontSize="xs"
          textTransform="uppercase"
          textAlign="end"
          fontWeight="bold"
          letterSpacing="wider"
          color={mode('white', 'gray.800')}
        >
          AR Enabled
        </Text>
      </Flex>
      <Badge
        display={hide ? 'block' : 'none'}
        colorScheme="red"
        position="absolute"
        bottom="7.5px"
        left="0"
        w="inherit"
      >
        AR not available on this device
      </Badge>
    </Box>
  );
};

export default ARCard;
