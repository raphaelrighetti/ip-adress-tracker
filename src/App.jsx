import React from 'react';
import './App.css';
import './variables.css';
import Attribution from './Components/Attribution';
import Header from './Components/Header';
import InformationList from './Components/InformationList';

const App = () => {
  return (
    <>
      <Header />
      <InformationList />
      <Attribution />
    </>
  );
};

export default App;
