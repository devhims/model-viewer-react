import { Box, Button, Heading, Text, Code, Link } from '@chakra-ui/react';

const SiteBanner = () => {
  return (
    <Box as="section">
      <Box
        maxW="2xl"
        mx="auto"
        px={{ base: '6', lg: '8' }}
        py={{ base: '16', sm: '20' }}
        textAlign="center"
      >
        <Heading
          as="h2"
          size="3xl"
          fontWeight="extrabold"
          letterSpacing="tight"
        >
          Model Viewer for React ⚡
        </Heading>
        <Text mt="4" fontSize="lg">
          Tailor made components and layouts to speed up your AR workflow on the
          web. Based on the{' '}
          <Link href="https://modelviewer.dev/" isExternal>
            <Code colorScheme="red">model-viewer</Code>
          </Link>{' '}
          component.
        </Text>

        <Button
          mt="8"
          as="a"
          href="#section1"
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default SiteBanner;
