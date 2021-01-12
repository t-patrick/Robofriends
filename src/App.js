import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

  render() {
    return (
      <div class-name="shopping-list">
          <h1>Shopping List for {this.props.name}</h1>
          <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }

}

export default App;
