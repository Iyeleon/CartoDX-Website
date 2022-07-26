import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import CartoDx from './Components/Carto';

class App extends Component {
  render(){ 
    const text1 = 'CartoDx';
    const text2 = 'Mapping Disease vulnerabilities'
    return (
      <div className="App">
        <CartoDx lamp={text1}/>
        <CartoDx lamp={text2}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
