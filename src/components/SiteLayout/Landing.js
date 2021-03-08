import {
  Center,
  VStack,
  Divider,
  Tag,
  useColorModeValue as mode,
  Box,
} from '@chakra-ui/react';
import QRCode from 'qrcode.react';
import React, { useRef } from 'react';

import SampleModel from '../../utilis/SampleModel';
import SiteBanner from './SiteBanner';
import logoIcon from '../../assets/ChairIcon.png';

import WithQRCode from '../../components/WithQRCode';
import ARCard from '../../components/ARCard';
import ARButtonOnly from '../../components/ARButtonOnly';
import ARLink from '../../components/ARLink';
import ARCardFS from '../../components/ARCardFS';

const Landing = () => {
  const titleRef = useRef(null);

  const handleScroll = () => {
    titleRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  let currentExposure = mode('2', '1');

  return (
    <>
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
              src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
              ios-src={SampleModel.usdzLink}
              ar-modes="scene-viewer quick-look"
              ar
              ar-scale="auto"
              exposure={currentExposure}
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
            <ARCard
              src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
              ios-src={SampleModel.usdzLink}
              exposure={currentExposure}
            />
          </VStack>
        </Center>
        <Divider borderWidth="2px" />
        <Center borderWidth="1px" p={3} borderRadius="md" shadow="baseline">
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
              src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
              ios-src={SampleModel.usdzLink}
              ar-modes="scene-viewer quick-look"
              ar
              ar-scale="auto"
              reveal="manual"
            />
          </VStack>
        </Center>
        <Divider borderWidth="2px" />
        <Center borderWidth="1px" p={3} borderRadius="md" shadow="baseline">
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
              src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
              ios-src={SampleModel.usdzLink}
              ar-modes="scene-viewer quick-look"
              ar
              ar-scale="fixed"
              reveal="manual"
            />
          </VStack>
        </Center>
        <Divider borderWidth="2px" m={3} />
        <Center borderWidth="1px" p={3} borderRadius="md" shadow="baseline">
          <VStack>
            <Tag
              size="lg"
              variant="solid"
              colorScheme="pink"
              rounded="sm"
              fontSize="sm"
              alignSelf="flex-start"
              mb={2}
              ml={-4}
              mt={-1}
            >
              Scan to AR:
            </Tag>
            <Box w="128px" h="128px" bgColor="beige">
              <QRCode
                value={'http://192.168.1.3:3000/qrtoar/'}
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
              src={`${SampleModel.glbLink}&title=${SampleModel.title}&link=${SampleModel.link}`}
              ios-src={SampleModel.usdzLink}
              shadow-softness="0"
              ar-scale="fixed"
              exposure="2"
            />
          </VStack>
        </Center>
      </VStack>
    </>
  );
};

export default Landing;
