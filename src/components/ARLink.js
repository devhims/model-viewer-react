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
        src={`${ARLink.defaultProps.glbLink}&title=${ARLink.defaultProps.title}&link=${ARLink.defaultProps.link}`}
        ios-src={ARLink.defaultProps.usdzLink}
        ar-modes={ARLink.defaultProps.arModes}
        ar={ARLink.defaultProps.ar}
        ar-scale={ARLink.defaultProps.arScale}
        camera-controls={ARLink.defaultProps.cameraControls}
        alt={ARLink.defaultProps.alt}
        style={{
          display: 'inline-block',
          contain: 'size',
          height: 'inherit',
        }}
      >
        <Link
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

ARLink.defaultProps = {
  glbLink:
    'https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.glb?v=1614846691007',
  usdzLink:
    'https://cdn.glitch.com/535530f6-0b12-4f5f-9140-39b40f6af82b%2FOffice_Couch.usdz?v=1614846692051',
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
