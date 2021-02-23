import {
  useColorMode,
  Box,
  IconButton,
  Button,
  Flex,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const ThemeSelector = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box m={{ base: '0', md: '2' }}>
      <IconButton
        icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        // _hover={{ bgColor: 'whiteAlpha.500' }}
      />
    </Box>
  );
};

export default ThemeSelector;
