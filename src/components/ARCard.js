import '@google/model-viewer/';
import {
  Badge,
  Button,
  Text,
  Box,
  Center,
  Flex,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import PlaceIcon from '../assets/3dicon.png';

const ARCard = ({ name, img, glbLink, usdzLink, SkyBox }) => {
  return (
    <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
      <Box
        className="ArBox"
        bgColor={mode('gray.200', 'gray.400')}
        m="0"
        p={3}
        textAlign="center"
        borderRadius={3}
        shadow="dark-lg"
        position="relative"
        overflow="hidden"
        w={{ base: '250px', md: '300px' }}
        h={{ base: '350px', md: '400px' }}
      >
        <model-viewer
          loading="eager"
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
            leftIcon={<Image src={PlaceIcon} w="15px" />}
            slot="ar-button"
            variant="outline"
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
      </Box>
    </Flex>
  );
};

export default ARCard;
