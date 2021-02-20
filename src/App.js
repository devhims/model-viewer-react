import './components/ARItem';
import ARItem from './components/ARItem';
import ARButtonOnly from './components/ARButtonOnly';
import HalfLife from './components/50_50';
import WithQRCode from './components/WithQRCode';

import AstroGLB from './assets/Astronaut.glb';
import AstroUSDZ from './assets/Astronaut.usdz';
import AstroImage from './assets/poster.png';
import SkyBox from './assets/spruit_sunrise_1k_HDR.hdr';

import OfficeCouchGLB from './assets/Office_Couch.glb';
import OfficeCouchUSDZ from './assets/Office_Couch.usdz';
import CouchImage from './assets/Couch.png';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <Router>
        <Switch>
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
            <Route path="/" exact>
              <WithQRCode
                name={name}
                img={CouchImage}
                glbLink={OfficeCouchGLB}
                usdzLink={OfficeCouchUSDZ}
                SkyBox={SkyBox}
              />
            </Route>
            <Route path="/couchar">
              <ARItem
                name={name}
                img={AstroImage}
                glbLink={OfficeCouchGLB}
                usdzLink={OfficeCouchUSDZ}
                SkyBox={SkyBox}
              />
            </Route>
            <ARButtonOnly
              name={name}
              img={AstroImage}
              glbLink={AstroGLB}
              usdzLink={AstroUSDZ}
            />
          </Stack>
        </Switch>
      </Router>
    </>
  );
}

export default App;
