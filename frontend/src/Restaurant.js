import React, { Component } from 'react'
import Counter from './Counter'
/*
display the rest. name
use count as a property
display counter and pass rating as the count prop
*/
class App extends Component {
  // YOUR CODE GOES BELOW
  
  render() {
    return (
      <div>
        {this.props.name} <br></br>
        Rating: <Counter count={this.props.rating}/>
      </div> 
    )
  }
}

export default App
