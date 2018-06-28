import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Header } from 'semantic-ui-react';

const DynamicPage = () => {
  return (
      <Container>
        <Header as="h2">Dynamic Page</Header>
        <p>This page was loaded asynchronously!!!</p>

        <Link to="/">Back to home</Link>
      </Container>
  );
};

export default DynamicPage;
