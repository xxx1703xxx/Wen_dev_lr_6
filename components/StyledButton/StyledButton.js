import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
`;

const StyledButton = () => {
    return <Button>Click Me</Button>;
};

export default StyledButton;