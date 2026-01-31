import React from 'react';
import DigitalClock from './components/DigitalClock';

function App() {
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f0f2f5',
    margin: 0
  };

  return (
    <div style={pageStyle}>
      <DigitalClock />
    </div>
  );
}

export default App;