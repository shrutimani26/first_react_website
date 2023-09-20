import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path ='/' exact component={Hero}/>
      </Switch>
      
    </Router>
    </>
  );
}

export default App;
