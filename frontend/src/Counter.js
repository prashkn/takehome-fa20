import React, { Component } from 'react'

class Counter extends Component {
  state = {
    currentCount: this.props.count
  }
  addByOne = () => {
    this.setState((prevState) => ({currentCount: prevState.currentCount + 1}));
  }
  subByOne = () => {
    this.setState((prevState) => ({currentCount: prevState.currentCount - 1}));
  }
  render() {
    return (
      <span>
      {this.state.currentCount}
      <br></br>
      <button onClick={this.addByOne}>Add</button>
      <button onClick={this.subByOne}>Subtract</button>
      </span>
    )
  }
}

export default Counter
