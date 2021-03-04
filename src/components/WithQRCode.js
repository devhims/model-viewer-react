import {
  Flex,
  Box,
  Text,
  Image,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import ARCard from './ARCard';
import logo from '../assets/logo.png';
import logoW from '../assets/logoW.png';
import logoIcon from '../assets/ChairIcon.png';
import QRCode from 'qrcode.react';

const WithQRCode = ({ name, img, glbLink, usdzLink, SkyBox }) => {
  return (
    <>
      <Flex
        bg="white"
        direction={{ base: 'column', md: 'row' }}
        rounded="lg"
        shadow="base"
        w={{ base: '90vw', md: '80vw' }}
        maxW="90vw"
        bgColor={mode('white', 'gray.700')}
        my={5}
      >
        <Box flex="1" p={{ base: '2', md: '10' }}>
          <Stack
            direction="column"
            align="center"
            justify="space-between"
            minH="100%"
            spacing={{ base: '5' }}
          >
            <Text
              fontSize="3xl"
              fontWeight="normal"
              textAlign="center"
              lineHeight="shorter"
              mt={{ base: '2.5', md: '0' }}
            >
              Comfy Couch
            </Text>
            <Box textAlign="center" display={{ base: 'none', md: 'block' }}>
              <Text as="h3" fontWeight="light">
                Scan QR code to launch AR on mobile
              </Text>
              <Box w="128px" h="128px" m="0 auto" bgColor="beige" mt={2}>
                <QRCode
                  value={'https://react-model-viewer.netlify.app/couchar/'}
                  size={128}
                  bgColor={mode('white', '#2d3848')}
                  fgColor={'#1591cf'}
                  level={'M'}
                  includeMargin={false}
                  renderAs={'svg'}
                  imageSettings={{
                    src: logoIcon,
                    x: null,
                    y: null,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
              </Box>
            </Box>
            <Box>
              <Text as="h6" fontSize="smaller" fontWeight="hairline">
                Powered By:
              </Text>
              <Image
                src={mode(logo, logoW)}
                w="80px"
                m="auto"
                mt={-4}
                pb={{ base: 'none', md: '2' }}
              />
            </Box>
          </Stack>
        </Box>
        <Box flex="1" p={{ base: '5', md: '8' }} m="auto">
          <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
            <ARCard
              name={name}
              img={img}
              glbLink={glbLink}
              usdzLink={usdzLink}
              SkyBox={SkyBox}
            />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default WithQRCode;
