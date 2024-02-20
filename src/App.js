

import React from 'react';
import Header from './Header';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Project />
        <Contact />
      </main>
    </div>
  );
}

export default App;
