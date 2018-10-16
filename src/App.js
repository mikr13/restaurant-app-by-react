import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Main from './components/MainComponent';

import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Ristorante Con Fusion",
      dishes: DISHES
    };
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
