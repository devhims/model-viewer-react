import '@google/model-viewer/';
import {
  Badge,
  Button,
  Text,
  Box,
  Flex,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import PlaceIconWhite from '../assets/3diconWhite.png';
import React, { useRef, useEffect, useState } from 'react';

const ARCard = ({ styles, ...rest }) => {
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
      {...styles}
    >
      <model-viewer
        poster={ARCard.defaultProps.img}
        src={`${ARCard.defaultProps.glbLink}&title=${ARCard.defaultProps.title}&link=${ARCard.defaultProps.link}`}
        ios-src={ARCard.defaultProps.usdzLink}
        ar-modes={ARCard.defaultProps.arModes}
        ar={ARCard.defaultProps.ar}
        ar-scale={ARCard.defaultProps.arScale}
        camera-controls={ARCard.defaultProps.cameraControls}
        exposure={ARCard.defaultProps.exposure}
        loading={ARCard.defaultProps.loading}
        shadow-intensity={ARCard.defaultProps.shadowIntensity}
        shadow-softness={ARCard.defaultProps.shadowSoftness}
        alt={ARCard.defaultProps.alt}
        {...rest}
        style={{
          display: 'block',
          width: '100%',
          height: '100%',
          backgroundColor: '#f0f5f5',
          touchAction: 'none',
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
    'https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.glb?v=1614846691007',
  usdzLink:
    'https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.usdz?v=1614846692051',
  img:
    'https://cdn.jsdelivr.net/gh/devhims/model-viewer-react/src/assets/Couch.png',
  buttonIcon:
    'https://cdn.jsdelivr.net/gh/devhims/model-viewer-react/src/assets/3diconWhite.png',

  loading: 'eager',
  reveal: 'auto',
  autoRotate: true,
  cameraControls: true,
  shadowIntensity: '1',
  shadowSoftness: '0',
  environmentImage: 'neutral',
  skyboxImage: null,
  exposure: '2',
  ar: true,
  arModes: 'scene-viewer quick-look',
  arScale: 'auto',
  arPlacement: 'floor',
  alt: 'A 3D model',
  title: 'Comfy Couch',
  link: 'https://cosmoreal.io/',
};
