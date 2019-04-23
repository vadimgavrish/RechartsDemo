// Import all dependancies
import React from 'react';
import ReactDom from 'react-dom';

import './style.css';

// Create component
const Index = () => {
  return <div>React to the Future!</div>;
};

// Render the component to index div
ReactDom.render(<Index />, document.getElementById('index'));
