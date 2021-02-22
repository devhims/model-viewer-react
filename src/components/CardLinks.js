import { Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CardLink = () => {
  const handleClick = () => {
    return <Link to="/arbutton"></Link>;
  };
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      justify="space-evenly"
      align="center"
    >
      <Link to="/comfycouch">
        <Button colorScheme="pink" variant="ghost" onClick={handleClick}>
          Card with QR Code
        </Button>
      </Link>

      <Link to="/couchar">
        <Button colorScheme="pink" variant="ghost" onClick={handleClick}>
          Simple AR Card
        </Button>
      </Link>
      <Link to="/arbutton">
        <Button colorScheme="pink" variant="ghost" onClick={handleClick}>
          AR Button
        </Button>
      </Link>
    </Stack>
  );
};

export default CardLink;
