import React, { useRef, useEffect, useState } from 'react';

import '@google/model-viewer/';
import { Badge, Button, Text, Box, Center } from '@chakra-ui/react';

const ARItem = ({ name, img, glbLink, usdzLink, SkyBox }) => {
  const [status, setStatus] = useState('');
  const inputRef = useRef(null);
  console.log(inputRef);

  useEffect(() => {
    let ss = inputRef.current.getAttribute('ar');
    setStatus(ss);
    console.log(ss);
    console.log(typeof status);
  }, [inputRef]);

  return (
    <>
      <Center>
        <Box
          className="ArBox"
          bgColor="gray.200"
          m="0"
          p={3}
          textAlign="center"
          borderRadius={3}
          shadow="dark-lg"
        >
          <model-viewer
            loading="eager"
            ref={inputRef}
            src={glbLink}
            ios-src={usdzLink}
            poster={img}
            // alt={name}
            ar-modes="webxr scene-viewer quick-look"
            auto-rotate
            camera-controls
            ar
            shadow-intensity="1"
            // skybox-image={SkyBox}
            // environment-image={SkyBox}
            environment-image="neutral"
            exposure="2"
            ar-scale="auto"
            alt="A 3D model of some wall art"
          >
            <Button
              slot="ar-button"
              variant="outline"
              textTransform="uppercase"
              colorScheme="linkedin"
              position="absolute"
              bottom="4px"
              left="27%"
              height={6}
              textAlign="center"
              className="myB"
            >
              Launch AR
            </Button>
          </model-viewer>
        </Box>
      </Center>
    </>
  );
};

export default ARItem;
