import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: Math.ceil(Math.random() * 107)
    };
  }

  handleClick(event, ID) {
    this.setState({
      id: ID
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Eric's Proxy Client</h1>
        <Project id={this.state.id} />
        <Related id={this.state.id} onClick={this.handleClick} />
        <Pledge id={this.state.id} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
