import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme = extendTheme({
  config: { initialColorMode: 'light', useSystemColorMode: false },
  components: {
    PinInput: {
      variants: {
        outline: {
          _placeholder: {
            color: mode('gray.300', 'white'),
          },
        },
      },
    },
    Drawer: {
      baseStyle: {
        footer: {
          px: 6,
          py: 4,
          display: 'flex',
          justifyContent: 'flex-start',
        },
      },
    },
  },
  colors: {
    seaBlue: {
      50: '#e1f4ff',
      100: '#bddcf5',
      200: '#97c2e8',
      300: '#6eaadd',
      400: '#4892d3',
      500: '#2e78b9',
      600: '#225e91',
      700: '#154368',
      800: '#062841',
      900: '#000e1b',
    },
    mainBlue: {
      800: '#03045e',
      700: '#023E8A',
      600: '#0077B6',
      500: '#0096C7',
      400: '#00B4D8',
      300: '#48CAE4',
      200: '#90E0EF',
      100: '#ADE8F4',
      50: '#CAF0F8',
    },
    primary: {
      50: '#fdf4ff',
      100: '#fae8ff',
      200: '#f5d0fe',
      300: '#f0abfc',
      400: '#e879f9',
      500: '#d946ef',
      600: '#c026d3',
      700: '#a21caf',
      800: '#86198f',
      900: '#701a75',
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
});

export default theme;
