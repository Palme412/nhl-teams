import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

//Components
import Capitals from "./components/Capitals";
import Wings from "./components/Wings";
import Blackhawks from "./components/Blackhawks";
import Sharks from "./components/Sharks";
import Wild from "./components/Wild";
import Teams from "./components/Teams";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Teams />} />
            <Route path='/capitals' element={<Capitals />} />
            <Route path='/wings' element={<Wings />} />
            <Route path='/wild' element={<Wild />} />
            <Route path='/sharks' element={<Sharks />} />
            <Route path='/blackhawks' element={<Blackhawks />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
