import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

//Components
import Capitals from "../components/Capitals";
import Wings from "../components/Wings";
import Blackhawks from "../components/Blackhawks";
import Sharks from "../components/Sharks";
import Wild from "../components/Wild";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Teams />} />
            <Route path='/capitals' elemtent={<Capitals />} />
            <Route path='/wings' elemtent={<Wings />} />
            <Route path='/wild' elemtent={<Wild />} />
            <Route path='/sharks' elemtent={<Sharks />} />
            <Route path='/blackhawks' elemtent={<Blackhawks />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
