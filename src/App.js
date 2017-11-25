import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currencies:'',
      cryptoCurrency : ''
    };
    this.bindCurrency = this.bindCurrency.bind(this);
    this.changeCryptoCurrency = this.changeCryptoCurrency.bind(this);
    this.getRates = this.getRates.bind(this);
  }
  
  changeCryptoCurrency= (event)=>{
     this.setState({
      cryptoCurrency : event.target.value},()=>{
        console.log(this);
      });
  }

  getRates(currencies){
    axios.get(
      `/Mine/Get?crypto=${this.state.cryptoCurrency}&currencies=${this.state.currencies}`
    ).then(data=>{
      console.dir(data.data);
    });
  }

  bindCurrency(event){
    this.setState({currencies: event.target.value},()=>{
      console.log(this.state.currencies);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input value={this.state.currencies} onChange={this.bindCurrency} placeholder="Currencies, separated by comma" type="text" />
        <select onChange={this.changeCryptoCurrency}>
          <option value="">Please select</option>
          <option value="BTC">Bitcoin</option>
          <option value="XMR">Monero</option>
        </select>
        <button onClick={this.getRates} >Get rates</button>
      </div>
    );
  }
}

export default App;
