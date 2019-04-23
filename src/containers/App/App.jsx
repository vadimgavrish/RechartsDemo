// Import dependancies
import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  font-size: 50px;
  color: lightgray;
  text-align: center;
  align-items: center;
  font-family: Helvetica;
  justify-content: center;
  background-color: gray;
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
      </Wrapper>
    );
  }
};

export default App;
