// Import dependancies
import React from 'react';
import styled from 'styled-components'

import Data from './Data.jsx';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  background-color: black;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 500;
  color: lightgray;
  margin-bottom: 25px;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Stock Price of AMZN</Title>
        <Data />
      </Wrapper>
    );
  }
};

export default App;
