import '@google/model-viewer/';
import {
  Badge,
  Button,
  Text,
  Box,
  Flex,
  Image,
  useColorModeValue as mode,
  Divider,
} from '@chakra-ui/react';

import React, { useRef, useEffect, useState } from 'react';
import Div100vh, { use100vh } from 'react-div-100vh';

const ARCardFS = ({ isFS = false, styles, ...rest }) => {
  const arButton = useRef(null);
  const [hide, setHide] = useState(false);

  let currentExposure = mode('2', '1');

  useEffect(() => {
    if (arButton) {
      isHidden(arButton.current) ? setHide(true) : setHide(false);
    }
  }, [arButton.offsetParent]);

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
        textAlign="center"
        borderRadius={3}
        position="relative"
        overflow="hidden"
        w="100vw"
        h={isFS ? use100vh : '400px'}
        {...styles}
      >
        <model-viewer
          poster={ARCardFS.defaultProps.img}
          src={`${ARCardFS.defaultProps.glbLink}&title=${ARCardFS.defaultProps.title}&link=${ARCardFS.defaultProps.link}`}
          ios-src={ARCardFS.defaultProps.usdzLink}
          ar-modes={ARCardFS.defaultProps.arModes}
          ar={ARCardFS.defaultProps.ar}
          ar-scale={ARCardFS.defaultProps.arScale}
          camera-controls={ARCardFS.defaultProps.cameraControls}
          exposure={currentExposure}
          loading={ARCardFS.defaultProps.loading}
          shadow-intensity={ARCardFS.defaultProps.shadowIntensity}
          shadow-softness={ARCardFS.defaultProps.shadowSoftness}
          alt={ARCardFS.defaultProps.alt}
          {...rest}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            backgroundColor: '#f0f5f5',
          }}
        >
          <Button
            ref={arButton}
            leftIcon={<Image src={ARCardFS.defaultProps.buttonIcon} w="15px" />}
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
      <Divider borderWidth="2px" my={3} />
    </Div100vh>
  );
};

export default ARCardFS;

ARCardFS.defaultProps = {
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
  shadowSoftness: '1',
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
