import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Game from './Game';
import Freeplay from './Freeplay';
import Learn from './Learn';

export default function App() {
  return (  
    <Router>
      <Header/>
      <Switch>
        <Route path='/game'><Game/></Route> 
        <Route path='/learn'><Learn/></Route> 
        <Route path='/freeplay'><Freeplay/></Route> 
        <Route path='/'><Freeplay/></Route> 
      </Switch>
      <p><span className='keyboard-color'>keyboard keys</span> | <span className='note-color'>piano notes</span></p>
      <Footer/>
    </Router>
  );
}