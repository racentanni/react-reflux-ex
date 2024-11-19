import React from 'react';
import MemeForm from './components/MemeForm';
import MemesList from './components/MemesList';

const App = () => {
  return (
    <div>
      <h1>Meme Generator</h1>
      <MemeForm />
      <MemesList />
    </div>
  );
};

export default App;
