import '@google/model-viewer';
import { Button, Box, Image } from '@chakra-ui/react';
import React, { useRef, useEffect, useState } from 'react';

import PlaceIcon from '../assets/3dicon.png';

const ARButtonOnly = ({ name, img, glbLink, usdzLink, SkyBox }) => {
  const arButton = useRef(null);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (arButton) {
      isHidden(arButton.current) ? setHide(true) : setHide(false);
    }
  }, [arButton]);

  const isHidden = (el) => {
    return el.offsetParent === null;
  };

  return (
    <Box className="ArButton">
      <model-viewer
        src={glbLink}
        ios-src={usdzLink}
        ar-modes="scene-viewer quick-look"
        ar
        ar-scale="auto"
        alt="A 3D model of some wall art"
        reveal="manual"
      >
        <Button
          ref={arButton}
          leftIcon={<Image src={PlaceIcon} w="15px" />}
          slot="ar-button"
          variant="solid"
          textTransform="uppercase"
          colorScheme="linkedin"
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
      <Button
        display={hide ? 'flex' : 'none'}
        // display="flex"
        disabled
        variant="solid"
        textTransform="uppercase"
        colorScheme="linkedin"
      >
        AR not available on this device
      </Button>
    </Box>
  );
};

export default ARButtonOnly;
