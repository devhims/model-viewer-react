import '@google/model-viewer/';
import {
  Badge,
  Button,
  Text,
  Box,
  Flex,
  Image,
  useColorModeValue as mode,
  useForceUpdate,
} from '@chakra-ui/react';

import PlaceIconWhite from '../assets/3diconWhite.png';
import React, { useRef, useEffect, useState } from 'react';

const ARCard = ({
  name,
  img,
  glbLink,
  usdzLink,
  loading,
  alt,
  link,
  arModes,
  ar,
  skyboxImage,
  environmentImage,
  exposure,
  arScale,
  shadowIntensity,
  shadowSoftness,
}) => {
  const arButton = useRef({});
  const [hide, setHide] = useState(false);

  let currentExposure = mode('2', '1');

  useEffect(() => {
    if (arButton) {
      isHidden(arButton.current) ? setHide(true) : setHide(false);
    }
  }, [arButton]);

  const isHidden = (element) => {
    return element.offsetParent === null;
  };

  const arCheck = () => {
    setTimeout(() => {
      isHidden(arButton.current) ? setHide(true) : setHide(false);
    }, 500);
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
        alt={alt}
        loading={loading}
        src={glbLink}
        ios-src={usdzLink}
        poster={img}
        ar-modes={arModes}
        auto-rotate
        camera-controls
        ar={ar}
        shadow-intensity={shadowIntensity}
        skybox-image={skyboxImage}
        environment-image={skyboxImage}
        environment-image={environmentImage}
        exposure={currentExposure}
        ar-scale={arScale}
        alt={alt}
        title={name}
        link={link}
        shadow-softness={shadowSoftness}
      >
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
          onClick={arCheck}
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
        as="a"
        href="https://developers.google.com/ar/discover/supported-devices"
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

ARCard.defaultProps = {
  glbLink:
    'https://cdn.jsdelivr.net/gh/devhims/model-viewer-react/src/assets/Office_Couch.glb',
  usdzLink:
    'https://cdn.jsdelivr.net/gh/devhims/model-viewer-react/src/assets/Office_Couch.usdz',
  img:
    'https://cdn.jsdelivr.net/gh/devhims/model-viewer-react/src/assets/Couch.png',

  loading: 'eager',
  reveal: 'auto',
  autoRotate: true,
  cameraControls: true,
  shadowIntensity: '1',
  environmentImage: 'neutral',
  skyboxImage: null,
  exposure: '2',
  reveal: 'auto',
  ar: true,
  arModes: 'scene-viewer quick-look',
  arScale: 'auto',
  arPlacement: 'floor',
  alt: '3D model',
  name: 'Comfy Couch',
  link: 'https://cosmoreal.io/',
  skyboxImage: null,
  shadowSoftness: '1',
};
