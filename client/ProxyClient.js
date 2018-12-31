import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Eric's Proxy Client</h1>
        <script src="http://localhost:3002/bundle.js"></script>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

