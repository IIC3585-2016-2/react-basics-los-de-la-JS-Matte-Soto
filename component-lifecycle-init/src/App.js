import React, { Component } from 'react';
import './App.css';

class App extends Component {

  /**
   * Define any default props which can be accessed via this.props.
   */
  static defaultProps = {
    author: 'Anonymous',
    comment: 'Empty comment',
  };

  /**
   * In ES6 classes, you can define the initial state by assigning this.state in
   * the constructor. With React.createClass(), you have to provide a separate
   * getInitialState method that returns the initial state.
   */
  constructor(props) {
    super(props);
    console.log('1. constructor');
    this.state = {
      likes: 1,
    };
  }

  /**
   * Called before the render method is executed.
   * Setting the state in this phase will not trigger a re-rendering.
   */
  componentWillMount() {
    console.log('2. componentWillMount');
  }

  /**
   * Returns the needed component markup.
   */
  render() {
    console.log('3. componentWillMount');
    return (
      <div className="App">
        <p> {this.props.author} </p>
        <p> {this.props.comment} </p>
        <p> Likes: {this.state.likes} </p>
      </div>
    );
  }

  /**
   * Called after the render method. DOM is available to be accessed.
   * DOM interactions should hanppen in this method and not in render.
   */
  componentDidMount() {
    console.log('4. componentDidMount');
  }
}

export default App;
