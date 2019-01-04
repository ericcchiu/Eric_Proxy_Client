import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeProject = this.changeProject.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      id: Math.floor(Math.random() * 99 + 1)
    };
  }

  changeProject() {
    this.setState({
      id: Math.floor(Math.random() * 99 + 1)
    });
  }

  handleClick(event) {
    this.setState({
      id: event.target.id
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to Eric's Proxy Client</h1>
        <Project id={this.state.id} />
        <Related id={this.state.id} />
        <button onClick={this.changeProject} value="Change Project" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
