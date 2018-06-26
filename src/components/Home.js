import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid } from 'semantic-ui-react';

import Features from './Features';

const Home = () => {
  return (
    <Container>
      <Grid stackable columns={1}>
        <Grid.Row>
          <Grid.Column>
            <Features />
            <Link to="/dynamic">Navigate to Dynamic Page</Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default Home;
