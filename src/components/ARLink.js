import '@google/model-viewer';
import { Box, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import React, { useRef, useEffect, useState } from 'react';

const ARLink = ({ styles, ...rest }) => {
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
    <Box position="relative" {...styles}>
      <model-viewer
        {...rest}
        style={{ display: 'inline-block', contain: 'size', height: 'inherit' }}
      >
        <Link
          as="button"
          ref={arButton}
          slot="ar-button"
          position="absolute"
          bottom="4px"
          left="50%"
          transform="translate(-50%, -50%)"
          onClick={arCheck}
        >
          Launch AR <ExternalLinkIcon mt="-4px" />
        </Link>
      </model-viewer>
      <Link
        href="https://developers.google.com/ar/discover/supported-devices"
        isExternal
        display={hide ? 'block' : 'none'}
        position="absolute"
        bottom="4px"
        left="50%"
        transform="translate(-50%, -50%)"
        w="max-content"
        textAlign="center"
      >
        AR not available on this device <ExternalLinkIcon mt="-4px" />
      </Link>
    </Box>
  );
};

export default ARLink;
