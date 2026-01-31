import React from 'react';
import UserForm from './components/UserForm';

function App() {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#f8f9fa'
  };

  return (
    <div style={containerStyle}>
      <UserForm />
    </div>
  );
}

export default App;