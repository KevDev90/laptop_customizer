import React, { Component } from 'react';
import Cart from './Cart/Cart';
import './App.css';
import CustomizeList from './CustomizeList/CustomizeList';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

export default class App extends Component {
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };

  handleChange = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );

    return (
      <div className="App">
        <header>
          <h1>ELF Computing | Laptops</h1>
        </header>
        <main>
          <CustomizeList  
                features={this.props.features}
                selected={this.state.selected}
                handleChange={this.handleChange}
                USCurrencyFormat={USCurrencyFormat}
          />
          <Cart
            selected={this.state.selected}
            total={total}
            USCurrencyFormat={USCurrencyFormat}
          />
        </main>
      </div>
    );
  }
}
