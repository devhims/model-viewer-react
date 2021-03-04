import {
  ButtonGroup,
  IconButton,
  Text,
  Image,
  VStack,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ChairLogo from '../../assets/ChairIcon.png';
import { ReactComponent as HeartLogo } from '../../assets/heart.svg';

const Footer = () => {
  return (
    <VStack direction="column" mx="auto" align="center" py={2}>
      <a aria-current="page" aria-label="Back to Home page" href="/" rel="home">
        <Image src={ChairLogo} w={10} />
      </a>
      <Text fontSize="sm" color={mode('gray.600', 'whitesmoke')}>
        <span style={{ wordSpacing: '2.5px' }}>
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
          href="https://www.linkedin.com/in/creativehims/"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
        />
        <IconButton
          as="a"
          href="https://github.com/devhims/model-viewer-react"
          aria-label="GitHub"
          icon={<FaGithub />}
        />
      </ButtonGroup>
    </VStack>
  );
};

export default Footer;
