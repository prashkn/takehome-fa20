import React, { Component } from 'react'
import Restaurant from './Restaurant'
import App from './App'

class AddRestaurant extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    }
  }
  render() {
    return (
      <form>
      Add your Restaurant <br />
        <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
      </form>
    )
  }
  updateInputValue(evt){
    this.setState({
      inputValue: evt.target.value
    });
  }
}

export default AddRestaurant
