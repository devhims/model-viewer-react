import '@google/model-viewer';
import { Button, Box } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

const ARButtonOnly = ({ name, img, glbLink, usdzLink, SkyBox }) => {
  const hiddenButton = useRef(null);

  useEffect(() => {
    console.log(getComputedStyle(hiddenButton.current));
    console.log(getComputedStyle(hiddenButton.current).display);
  }, [hiddenButton]);

  // useEffect(() => {
  //   const timeout = setInterval(() => {
  //     console.log(getComputedStyle(hiddenButton.current).display);
  //   }, 1000);

  //   return () => timeout;
  // });

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
          style={{ display: 'flex' }}
          className="myB"
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
