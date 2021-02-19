import './components/ARItem';
import ARItem from './components/ARItem';
import ARButtonOnly from './components/ARButtonOnly';
import HalfLife from './components/50_50';
import WithQRCode from './components/WithQRCode';

import AstroGLB from './assets/Astronaut.glb';
import AstroUSDZ from './assets/Astronaut.usdz';
import AstroImage from './assets/poster.png';
import SkyBox from './assets/spruit_sunrise_1k_HDR.hdr';

import {
  Box,
  Flex,
  Center,
  Stack,
  Button,
  VStack,
  Text,
  Heading,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import ThemeSelector from './components/ThemeSelector';

const name = 'Astronaut';

function App() {
  return (
    <>
      <Stack
        spacing={5}
        direction="column"
        align="center"
        bgColor={mode('white', '#222222')}
      >
        {/* <HalfLife /> */}
        <Flex alignSelf="flex-start" m={4}>
          <ThemeSelector />
        </Flex>
        <WithQRCode
          name={name}
          img={AstroImage}
          glbLink={AstroGLB}
          usdzLink={AstroUSDZ}
          SkyBox={SkyBox}
        />
        <ARItem
          name={name}
          img={AstroImage}
          glbLink={AstroGLB}
          usdzLink={AstroUSDZ}
          SkyBox={SkyBox}
        />
        <ARButtonOnly
          name={name}
          img={AstroImage}
          glbLink={AstroGLB}
          usdzLink={AstroUSDZ}
        />
      </Stack>
    </>
  );
}

export default App;
