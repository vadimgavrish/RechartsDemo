// Import dependancies
import React from 'react';
import styled from 'styled-components'

import Data from './Data.jsx';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  font-size: 50px;
  color: lightgray;
  text-align: center;
  align-items: center;
  background-color: gray;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  color: lightgray;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>React to the Future!</Title>
        <Data />
      </Wrapper>
    );
  }
};

export default App;
