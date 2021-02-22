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
  Tag,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import ThemeSelector from './components/ThemeSelector';
import CardLink from './components/CardLinks';

const name = 'Astronaut';

function App() {
  return (
    <>
      <ThemeSelector />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Divider borderWidth="2px" />
            <CardLink />
            <VStack
              justify="space-evenly"
              bgColor={mode('white', 'gray.600')}
              minH="100vh"
              overflow="scroll"
            >
              <Divider mb={3} borderWidth="2px" />
              <Center
                py={{ base: '5', md: '10' }}
                borderWidth="1px"
                p={3}
                borderRadius="md"
                shadow="baseline"
                mb={5}
              >
                <VStack>
                  <Tag
                    size="lg"
                    variant="solid"
                    colorScheme="pink"
                    rounded="sm"
                    fontSize="sm"
                    alignSelf="flex-start"
                    mb={5}
                    ml={-4}
                    mt={-1}
                  >
                    Card with QR Code:
                  </Tag>
                  <WithQRCode
                    name={name}
                    img={CouchImage}
                    glbLink={OfficeCouchGLB}
                    usdzLink={OfficeCouchUSDZ}
                    SkyBox={SkyBox}
                  />
                </VStack>
              </Center>
              <Divider m={3} borderWidth="2px" />
              <Center
                borderWidth="1px"
                p={3}
                borderRadius="md"
                shadow="baseline"
                mb={5}
              >
                <VStack w="inherit">
                  <Tag
                    size="lg"
                    variant="solid"
                    colorScheme="pink"
                    rounded="sm"
                    fontSize="sm"
                    alignSelf="flex-start"
                    mb={{ base: '2', md: '4' }}
                    ml={-4}
                    mt={-1}
                  >
                    Simple AR Card:
                  </Tag>
                  <ARCard
                    name={name}
                    img={CouchImage}
                    glbLink={OfficeCouchGLB}
                    usdzLink={OfficeCouchUSDZ}
                    SkyBox={SkyBox}
                  />
                </VStack>
              </Center>
              <Divider borderWidth="2px" m={3} />
              <Center
                borderWidth="1px"
                p={3}
                borderRadius="md"
                shadow="baseline"
              >
                <VStack>
                  <Tag
                    size="lg"
                    variant="solid"
                    colorScheme="pink"
                    rounded="sm"
                    fontSize="sm"
                    alignSelf="flex-start"
                    mb={5}
                    ml={-4}
                    mt={-1}
                  >
                    AR Button:
                  </Tag>
                  <ARButtonOnly
                    name={name}
                    img={CouchImage}
                    glbLink={OfficeCouchGLB}
                    usdzLink={OfficeCouchUSDZ}
                  />
                </VStack>
              </Center>
              <Divider borderWidth="2px" />
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
