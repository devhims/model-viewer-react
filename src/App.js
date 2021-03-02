import React, { useRef } from 'react';

import ARCard from './components/ARCard';
import ARButtonOnly from './components/ARButtonOnly';
import WithQRCode from './components/WithQRCode';
import ARLink from './components/ARLink';
import ARCardFS from './components/ARCardFS';

import OfficeCouchGLB from './assets/Office_Couch.glb';
import OfficeCouchUSDZ from './assets/Office_Couch.usdz';
import CouchImage from './assets/Couch.png';
import SkyBox from './assets/spruit_sunrise_1k_HDR.hdr';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  Center,
  VStack,
  Divider,
  Tag,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import SiteBanner from './components/SiteBanner';
import NavBar from './components/NavBar';
import SampleModel from './utilis/SampleModel';

const App = () => {
  const titleRef = useRef(null);

  const handleScroll = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Router>
      <Switch>
        <Route path="/comfycouchfs">
          <Center>
            <VStack w="auto" h="auto">
              <ARCardFS
                isFS={true}
                src={OfficeCouchGLB}
                ios-src={OfficeCouchUSDZ}
                shadow-softness="0"
                ar-scale="fixed"
                exposure="2"
              />
            </VStack>
          </Center>
        </Route>
        <div>
          <NavBar />
          <Divider borderWidth="2px" />
          <Route path="/" exact>
            <SiteBanner handleScroll={handleScroll} />
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
                ref={titleRef}
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
                  {/* 1. Assign only the required properties from the object */}
                  <WithQRCode
                    name={SampleModel.name}
                    img={SampleModel.CouchImage}
                    glbLink={SampleModel.glbLink}
                    usdzLink={SampleModel.usdzLink}
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
                  {/* 2. Use spread operator to assign the properties */}
                  <ARCard {...SampleModel} />
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
                  {/* 3. Assign direct imports with some indirect object properties */}
                  <ARButtonOnly
                    src={OfficeCouchGLB}
                    ios-src={OfficeCouchUSDZ}
                    ar-modes="scene-viewer quick-look"
                    ar
                    ar-scale="auto"
                    alt="A 3D model of some wall art"
                    reveal="manual"
                  />
                </VStack>
              </Center>
              <Divider borderWidth="2px" />
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
                    AR Link:
                  </Tag>
                  <ARLink
                    src={OfficeCouchGLB}
                    ios-src={OfficeCouchUSDZ}
                    ar-modes="scene-viewer quick-look"
                    ar
                    ar-scale="fixed"
                    reveal="manual"
                  />
                </VStack>
              </Center>
              <Divider borderWidth="2px" />
              <Center>
                <VStack w="auto" h="400px">
                  <Tag
                    size="lg"
                    variant="solid"
                    colorScheme="pink"
                    rounded="sm"
                    fontSize="sm"
                    alignSelf="flex-start"
                  >
                    AR Card FullView:
                  </Tag>

                  <ARCardFS
                    src={OfficeCouchGLB}
                    ios-src={OfficeCouchUSDZ}
                    shadow-softness="0"
                    ar-scale="fixed"
                    exposure="2"
                  />
                </VStack>
              </Center>
            </VStack>
          </Route>
          <Route path="/comfycouch">
            <Center my={5} h="80vh">
              <WithQRCode
                name={SampleModel.name}
                img={CouchImage}
                glbLink={OfficeCouchGLB}
                usdzLink={OfficeCouchUSDZ}
                SkyBox={SkyBox}
              />
            </Center>
          </Route>
          <Route path="/couchar">
            <Center my={5} h="70vh">
              <ARCard {...SampleModel} />
            </Center>
          </Route>
          <Route path="/arbutton">
            <Center my={5} h="70vh">
              <ARButtonOnly
                name={SampleModel.name}
                img={CouchImage}
                glbLink={OfficeCouchGLB}
                usdzLink={OfficeCouchUSDZ}
              />
            </Center>
          </Route>
          <Route path="/arlink">
            <Center my={5} h="70vh">
              <ARLink
                src={OfficeCouchGLB}
                ios-src={OfficeCouchUSDZ}
                ar-modes="scene-viewer quick-look"
                ar
                ar-scale="fixed"
                reveal="manual"
              />
            </Center>
          </Route>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
