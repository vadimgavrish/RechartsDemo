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

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        React to the Future!
      </Wrapper>
    );
  }
};

export default App;
