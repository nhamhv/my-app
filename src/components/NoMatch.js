import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon } from 'semantic-ui-react';

const NoMatch = () => {
    return (
        <Container>
            <Icon name="minus circle" size="big"/>
            <strong>Page not found!</strong>

            <br/>
          <Link to="/">Back to home</Link>
        </Container>
    );
};

export default NoMatch;
