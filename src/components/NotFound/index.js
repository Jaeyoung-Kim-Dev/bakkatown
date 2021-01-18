import React from 'react';
import { Container, Code, Text, Button } from './NotFoundElements';

const NotFound = () => {
  return (
    <>
      <Container>
        <Code>404</Code>
        <Text>Page Not Found</Text>
        <Button to='/'>Home</Button>
      </Container>
    </>
  );
};

export default NotFound;
