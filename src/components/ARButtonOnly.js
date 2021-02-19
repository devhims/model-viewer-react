import '@google/model-viewer';
import { Button, Box } from '@chakra-ui/react';

const ARButtonOnly = ({ name, img, glbLink, usdzLink, SkyBox }) => {
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
          slot="ar-button"
          variant="outline"
          textTransform="uppercase"
          colorScheme="linkedin"
        >
          Activate AR
        </Button>
      </model-viewer>
    </Box>
  );
};

export default ARButtonOnly;
