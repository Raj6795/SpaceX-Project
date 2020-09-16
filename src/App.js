import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Filters from './Components/Filters';
import Header from './Components/Header';


function App() {

  return (
      <div className="App">
        <Router>
          <Header />
          <Filters />
        </Router>
      </div>
    );
}

export default App;
