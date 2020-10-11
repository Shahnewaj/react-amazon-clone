import React from 'react';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';

function App() {
  return (
    <div className="App">
      {/* header part  */}
      <Header />
      <Home />

      {/* Body Part  */}
    </div>
  );
}

export default App;
