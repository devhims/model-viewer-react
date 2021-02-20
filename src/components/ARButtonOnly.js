import '@google/model-viewer';
import { Button, Box } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

const ARButtonOnly = ({ name, img, glbLink, usdzLink, SkyBox }) => {
  const hiddenButton = useRef(null);

  useEffect(() => {
    console.log(hiddenButton.current.getAttribute('slot').enabled);
  }, [hiddenButton]);

  return (
    <Box className="ArButton" textAlign="center">
      <model-viewer
        src={glbLink}
        ios-src={usdzLink}
        ar-modes="webxr scene-viewer quick-look"
        ar
        ar-scale="auto"
        alt="A 3D model of some wall art"
        reveal="manual"
      >
        <Button
          ref={hiddenButton}
          slot="ar-button"
          variant="outline"
          textTransform="uppercase"
          colorScheme="linkedin"
        >
          Activate AR
        </Button>
        {/* <Button
          ref={showButton}
          variant="outline"
          textTransform="uppercase"
          colorScheme="linkedin"
        >
          AR Unavailable on this device
        </Button> */}
      </model-viewer>
    </Box>
  );
};

export default ARButtonOnly;
