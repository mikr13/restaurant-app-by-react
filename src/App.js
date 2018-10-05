import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

import './App.css';

import Menu from './components/MenuComponent';

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
      <div className="App">
        <Navbar dark color="primary" className="navbar">
          <div className="container">
            <NavbarBrand href="/">{this.state.title}</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
