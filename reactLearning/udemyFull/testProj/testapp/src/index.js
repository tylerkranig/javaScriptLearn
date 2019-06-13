import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Star from "./Components/Star";
import Rating from "./Components/Rating";

import "./styles.css";

function App() {
    return (
        <div className="App">
          <h2>Star Components:</h2>
          <Star color="pink" isFilled />
          <Star color="magenta" />
          <Star color="indigo" isFilled />
          <h2>Rating Component (uses Stars):</h2>
          <Rating stars={4} />
        </div>
      );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
