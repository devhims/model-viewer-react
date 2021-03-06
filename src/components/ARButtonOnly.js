import '@google/model-viewer';
import { Button, Box, Image } from '@chakra-ui/react';
import React, { useRef, useEffect, useState } from 'react';

const ARButtonOnly = ({ styles, ...rest }) => {
  const arButton = useRef(null);
  const [hide, setHide] = useState(false);

  const isHidden = (element) => {
    return element.offsetParent === null;
  };

  useEffect(() => {
    if (arButton) {
      isHidden(arButton.current) ? setHide(true) : setHide(false);
    }
  }, [arButton]);

  const arCheck = () => {
    setTimeout(() => {
      isHidden(arButton.current) ? setHide(true) : setHide(false);
    }, 500);
  };

  return (
    <Box pos="relative" {...styles}>
      <model-viewer
        src={`${ARButtonOnly.defaultProps.glbLink}&title=${ARButtonOnly.defaultProps.title}&link=${ARButtonOnly.defaultProps.link}`}
        ios-src={ARButtonOnly.defaultProps.usdzLink}
        ar-modes={ARButtonOnly.defaultProps.arModes}
        ar={ARButtonOnly.defaultProps.ar}
        ar-scale={ARButtonOnly.defaultProps.arScale}
        camera-controls={ARButtonOnly.defaultProps.cameraControls}
        alt={ARButtonOnly.defaultProps.alt}
        {...rest}
        style={{ display: 'inline-block', contain: 'size', height: 'inherit' }}
      >
        <Button
          ref={arButton}
          leftIcon={
            <Image src={ARButtonOnly.defaultProps.buttonIcon} w="15px" />
          }
          slot="ar-button"
          variant="solid"
          textTransform="uppercase"
          colorScheme="blue"
          position="absolute"
          bottom="4px"
          left="50%"
          transform="translate(-50%, -50%)"
          height={6}
          fontWeight="medium"
          onClick={arCheck}
          _active={{
            bg: 'whitesmoke',
          }}
        >
          Launch AR
        </Button>
      </model-viewer>
      <Button
        display={hide ? 'block' : 'none'}
        disabled
        variant="solid"
        textTransform="uppercase"
        colorScheme="linkedin"
        position="absolute"
        bottom={-15}
        left="50%"
        transform="translate(-50%, -50%)"
        w="auto"
        textAlign="center"
      >
        AR not available on this device
      </Button>
    </Box>
  );
};

export default ARButtonOnly;

ARButtonOnly.defaultProps = {
  glbLink:
    'https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.glb?v=1614846691007',
  usdzLink:
    'https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.usdz?v=1614846692051',
  buttonIcon:
    'https://cdn.jsdelivr.net/gh/devhims/model-viewer-react/src/assets/3diconWhite.png',

  loading: 'eager',
  reveal: 'manual',
  autoRotate: true,
  cameraControls: true,
  ar: true,
  arModes: 'scene-viewer quick-look',
  arScale: 'auto',
  arPlacement: 'floor',
  alt: 'A 3D model',
  title: 'Comfy Couch',
  link: 'https://cosmoreal.io/',
};
