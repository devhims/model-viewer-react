import '@google/model-viewer';
import { Button, Box, Image } from '@chakra-ui/react';
import React, { useRef, useEffect, useState } from 'react';

import PlaceIconWhite from '../assets/3diconWhite.png';

const ARButtonOnly = ({ styles, ...rest }) => {
  const arButton = useRef(null);
  const [hide, setHide] = useState(false);

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
    <Box pos="relative" {...styles}>
      <model-viewer
        id="model-viewer"
        {...rest}
        style={{ display: 'inline-block', contain: 'size', height: 'inherit' }}
      >
        <Button
          id="ar-button"
          ref={arButton}
          leftIcon={<Image src={PlaceIconWhite} w="15px" />}
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
            bg: 'blue.100',
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
