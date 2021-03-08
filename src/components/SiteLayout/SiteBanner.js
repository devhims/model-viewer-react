import {
  Box,
  Button,
  Heading,
  Text,
  Code,
  Link,
  useColorModeValue as mode,
  Image,
} from '@chakra-ui/react';

import chakralogo from '../../assets/chakralogo.png';

const SiteBanner = ({ handleScroll }) => {
  return (
    <Box as="section" bg={mode('gray.200', 'gray.900')}>
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading
          as="h3"
          size="2xl"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          Model Viewer for React ⚡
        </Heading>
        <Text mt="4" fontSize="lg">
          Tailor made components to speed up your AR workflow on the web. Based
          on the{' '}
          <Link href="https://modelviewer.dev/" isExternal>
            <Code colorScheme="red">model-viewer</Code>
          </Link>{' '}
          component.
        </Text>

        <Box textAlign="center" pos="relative" mt={6}>
          <Text display="inline-block" mr={1}>
            Built with{' '}
          </Text>
          <Image
            display="inline-block"
            src={chakralogo}
            h={5}
            mx="0 auto"
            mt={-1}
          />
        </Box>
        <Button
          mt="8"
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
          onClick={handleScroll}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default SiteBanner;
