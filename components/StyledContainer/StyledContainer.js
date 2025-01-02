import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: lightgray;
  padding: 20px;
  border-radius: 5px;
`;

const StyledContainer = () => {
    return (
        <Container>
            <h2>Styled Container</h2>
            <p>This is a container with styled-components.</p>
        </Container>
    );
};

export default StyledContainer;
