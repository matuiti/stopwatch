import React from 'react';
import Stopwatch from './Stopwatch';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">Stopwatch App</h1>
      <Stopwatch />
    </div>
  );
};

export default App;
