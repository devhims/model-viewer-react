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
import Div100vh, { use100vh } from 'react-div-100vh';
import DeviceOrientation, {
  Orientation,
  onOrientationChange,
} from 'react-screen-orientation';

const ARCardFS = ({
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
  isFS = false,
}) => {
  const arButton = useRef({});
  const [hide, setHide] = useState(false);

  //   const [orientation, setOrientation] = useState();

  //   useEffect(() => {
  //     const handleOrientationChange = () =>
  //       window.screen.orientation && setOrientation(window.screen.orientation);
  //     window.addEventListener('deviceorientation', handleOrientationChange);
  //     return () =>
  //       window.removeEventListener('deviceorientation', handleOrientationChange);
  //   }, []);

  //   console.log(orientation);

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
    <Div100vh>
      <Box
        bgColor={mode('gray.200', 'gray.400')}
        //   p={{ base: '1', md: '2' }}
        textAlign="center"
        borderRadius={3}
        shadow="dark-lg"
        position="relative"
        overflow="hidden"
        w="100vw"
        h={isFS ? use100vh : '400px'}
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
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f5f5',
            // touchAction: 'none',
          }}
        >
          <Button
            ref={arButton}
            leftIcon={<Image src={PlaceIconWhite} w="15px" />}
            slot="ar-button"
            variant="solid"
            textTransform="uppercase"
            colorScheme="blue"
            position="absolute"
            bottom="14px"
            left="50%"
            transform="translate(-50%, -50%)"
            height={6}
            fontWeight="normal"
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
          display={hide ? 'flex' : 'none'}
          alignItems="center"
          justifyContent="center"
          colorScheme="red"
          position="absolute"
          bottom="10px"
          left="0"
          w="100vw"
        >
          AR not available on this device
        </Badge>
      </Box>
    </Div100vh>
  );
};

export default ARCardFS;

ARCardFS.defaultProps = {
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
