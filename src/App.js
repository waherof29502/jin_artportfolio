import React from 'react';
import {
  Footer,
  Portfolio,
  Possibility,
  Features,
  Intro,
  Header,
} from './containers';
import { Jin, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Intro />
      <Portfolio />
      <Jin />
      <Possibility />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
