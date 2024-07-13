import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Header from './components/Header';
import Banner from './components/Banner';
import Description from './components/Description';
import Cards from './components/Cards';
import Contribution from './components/Contribution';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

const CloseButton = ({ onClick }) => (
  <div className="close-button" onClick={onClick}>
    <FontAwesomeIcon icon={faTimes} size="2x" />
  </div>
);

const App = () => (
  <div className="App">
    <CloseButton onClick={() => console.log('Close button clicked')} />
    <Header />
    <Banner />
    <Description />
    <Cards />
    <Contribution />
    <Contact />
    <Footer />
  </div>
);

export default App;
