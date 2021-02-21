import './components/ARItem';
import ARItem from './components/ARItem';
import ARButtonOnly from './components/ARButtonOnly';
import WithQRCode from './components/WithQRCode';

import OfficeCouchGLB from './assets/Office_Couch.glb';
import OfficeCouchUSDZ from './assets/Office_Couch.usdz';
import CouchImage from './assets/Couch.png';
import SkyBox from './assets/spruit_sunrise_1k_HDR.hdr';

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
            bgColor={mode('white', 'gray.600')}
          >
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
            <Route path="/couchar" exact>
              <ARItem
                name={name}
                img={CouchImage}
                glbLink={OfficeCouchGLB}
                usdzLink={OfficeCouchUSDZ}
                SkyBox={SkyBox}
              />
            </Route>
            <ARButtonOnly
              name={name}
              img={CouchImage}
              glbLink={OfficeCouchGLB}
              usdzLink={OfficeCouchUSDZ}
            />
          </Stack>
        </Switch>
      </Router>
    </>
  );
}

export default App;
