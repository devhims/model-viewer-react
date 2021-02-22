import './components/ARItem';
import ARItem from './components/ARItem';
import ARCard from './components/ARCard';
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
  Divider,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import ThemeSelector from './components/ThemeSelector';

const name = 'Astronaut';

function App() {
  return (
    <>
      <ThemeSelector />
      <Router>
        <Switch>
          <Route path="/" exact>
            <VStack
              justify="space-evenly"
              bgColor={mode('white', 'gray.600')}
              minH="100vh"
              overflow="scroll"
            >
              <Center py={{ base: '5', md: '10' }}>
                <WithQRCode
                  name={name}
                  img={CouchImage}
                  glbLink={OfficeCouchGLB}
                  usdzLink={OfficeCouchUSDZ}
                  SkyBox={SkyBox}
                />
              </Center>
              <Divider />
              <Center py={10}>
                <ARCard
                  name={name}
                  img={CouchImage}
                  glbLink={OfficeCouchGLB}
                  usdzLink={OfficeCouchUSDZ}
                  SkyBox={SkyBox}
                />
              </Center>
              <Divider />
              <Center py={10}>
                <ARButtonOnly
                  name={name}
                  img={CouchImage}
                  glbLink={OfficeCouchGLB}
                  usdzLink={OfficeCouchUSDZ}
                />
              </Center>
              <Divider />
            </VStack>
          </Route>
          <Route path="/comfycouch">
            <Center my={5} h="80vh">
              <WithQRCode
                name={name}
                img={CouchImage}
                glbLink={OfficeCouchGLB}
                usdzLink={OfficeCouchUSDZ}
                SkyBox={SkyBox}
              />
            </Center>
          </Route>
          <Route path="/couchar">
            <Center my={5} h="70vh">
              <ARCard
                name={name}
                img={CouchImage}
                glbLink={OfficeCouchGLB}
                usdzLink={OfficeCouchUSDZ}
                SkyBox={SkyBox}
              />
            </Center>
          </Route>
          <Route path="/arbutton">
            <Center my={5} h="70vh">
              <ARButtonOnly
                name={name}
                img={CouchImage}
                glbLink={OfficeCouchGLB}
                usdzLink={OfficeCouchUSDZ}
              />
            </Center>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
