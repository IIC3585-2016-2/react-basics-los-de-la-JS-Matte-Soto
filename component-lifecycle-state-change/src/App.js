import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  /**
   * Always called before the render method and enables to define if a
   * re-rendering is needed.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("1. shouldComponentUpdate");
    return nextState.likes % 53 === 0;
  }

  /**
   * Is called as soon as the the shouldComponentUpdate returned true.
   * Any state changes via this.setState are not allowed.
   */
  componentWillUpdate(nextProps, nextState) {
    console.log("2. componentWillUpdate");
  }

  /**
   * Returns the needed component markup.
   */
  render() {
    console.log("3. render");
    return (
      <div className="App">
        <p> Author: {this.props.author} </p>
        <p> Comment: {this.props.comment} </p>
        <p> Likes: {this.state.likes} </p>
      </div>
    );
  }

  /**
   * Similar to the componentDidMount, this method can be used to perform DOM
   * operations after the data has been updated.
   */
  componentDidUpdate(prevProps, prevState) {
    console.log("4. componentDidUpdate");
  }

  componentDidMount() {
    setInterval(() => this.setState({ likes: this.state.likes + 1 }), 50);
  }
}

export default App;
