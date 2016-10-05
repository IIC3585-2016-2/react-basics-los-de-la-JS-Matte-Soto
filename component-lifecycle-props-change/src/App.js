import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Father. shouldComponentUpdate");
    return nextState.likes % 41 === 0;
  }

  render() {
    return (
      <div className="App">
        <Comment
          author={this.props.author}
          comment={this.props.comment}
          likes={this.state.likes}
        />
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => this.setState({ likes: this.state.likes + 1 }), 50);
  }
}



/**
 * Child component
 */
class Comment extends Component {

  constructor(props) {
    super(props);
    this.state = {
      increasing: false,
    };
  }

  /**
   * Enables to update the state depending on the existing and upcoming props,
   * without triggering another rendering. One interesting thing to remember
   * here is that there is no equivalent method for the state as state changes
   * should never trigger any props changes.
   */
  componentWillReceiveProps(nextProps) {
    console.log("Child. 1. componentWillReceiveProps");
    this.setState({
      increasing: nextProps.likes > this.props.likes,
    });
  }

  /**
   * Always called before the render method and enables to define if a
   * re-rendering is needed.
   */
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Child. 2. shouldComponentUpdate");
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Child. 3. componentWillUpdate");
  }

  render() {
    console.log("Child. 4. render");
    return(
      <div>
        <p> {this.props.author} </p>
        <p> {this.props.comment} </p>
        <p> Likes: {this.props.likes} </p>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Child. 5. componentDidUpdate");
  }
}

export default App;
