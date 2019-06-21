import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Done
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
  
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://www.boxofficemojo.com/data/js/wknd5.php";
    script.async=true;
    document.body.appendChild(script);
  }

}

export default App;
