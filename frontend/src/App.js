import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'
import AddRestaurant from './AddRestaurant'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ]
    }
  }

  render() {
    return (
      <div className="App">
        Current Count: <span><Counter count={0}/></span>
        <Instructions complete={true}/>
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <hr />
        <AddRestaurant />
        <button onClick={inputValue => this.updateRestaurants(inputValue)}>Add</button>
      </div>
    )
  }
  updateRestaurants(newRestaurant){
    this.setState((prevState) => ({restaurants: [...prevState.restaurants, newRestaurant]}))
  }
}

export default App
