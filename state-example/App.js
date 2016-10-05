import React from 'react';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text : "soy un state"
    }
  }
  update(e) {
    this.setState({text: e.target.value})
  }
  render() {
    return(
      <div>
        <input type="text"
          onChange={this.update.bind(this)}/>
        <h1>{this.state.text}</h1>
      </div>)
  }
}

export default App
