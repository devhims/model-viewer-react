import React, { useRef } from 'react';

import ARCard from './components/ARCard';
import ARButtonOnly from './components/ARButtonOnly';
import WithQRCode from './components/WithQRCode';

import OfficeCouchGLB from './assets/Office_Couch.glb';
import OfficeCouchUSDZ from './assets/Office_Couch.usdz';
import CouchImage from './assets/Couch.png';
import SkyBox from './assets/spruit_sunrise_1k_HDR.hdr';
// import V13 from './assets/V13glb.glb';

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
    <>
      <Router>
        <NavBar />
        <Divider borderWidth="2px" />
        <Switch>
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
                    name={SampleModel.name}
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
        </Switch>
      </Router>
    </>
  );
};

export default App;
