import {
  Box,
  ButtonGroup,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  Image,
  VStack,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';
// import { Logo } from './Logo';
import ChairLogo from '../assets/ChairIcon.png';
import { ReactComponent as HeartLogo } from '../assets/heart.svg';

const Footer = () => {
  return (
    <VStack direction="column" mx="auto" align="center">
      <a aria-current="page" aria-label="Back to Home page" href="/" rel="home">
        <Image src={ChairLogo} w={10} />
      </a>
      <Text fontSize="sm" color="gray.600">
        {/* <span>Made with ❤️ by Himanshu</span> */}
        <span>
          Made with{' '}
          <HeartLogo
            width="10px"
            height="10px"
            style={{ display: 'inline-block' }}
          />{' '}
          by Himanshu
        </span>
      </Text>

      <ButtonGroup color="gray.600" variant="ghost" size="md" spacing="0.1rem">
        <IconButton
          as="a"
          href="www.google.com"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
        />
        <IconButton
          as="a"
          href="https://github.com/devhims/model-viewer-react"
          aria-label="LinkedIn"
          icon={<FaGithub />}
        />
      </ButtonGroup>
    </VStack>
  );
};

export default Footer;
