import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Menu extends React.Component{
  state =  {
    veg : false,

    food:   {
      "breakfast": [
        {"food": "pancakes", "price": 5.00, "vegetarian": true},
        {"food": "waffles", "price": 5.00, "vegetarian": true},
        {"food": "orange juice", "price": 2.00, "vegetarian": true}
      ],
      "lunch": [
        {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
        {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
        {"food": "hamburger", "price": 8.00, "vegetarian": false}
      ],
      "dinner": [
        {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
        {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
        {"food": "chili", "price": 8.00, "vegetarian": false}
      ]
    }
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
renderVeg() {
  return(
    <div>
    <h2>
      Breakfast
      <p>
        <li>
        {this.state.food.breakfast[0].food} (${this.state.food.breakfast[0].price})
        </li>
        <li>
        {this.state.food.breakfast[1].food} (${this.state.food.breakfast[1].price})
        </li>
        <li>
        {this.state.food.breakfast[2].food} (${this.state.food.breakfast[2].price})
        </li>
      </p>
    </h2>
    <h2>
      Lunch
      <p>
        <li>
        {this.state.food.lunch[1].food} (${this.state.food.lunch[1].price})
        </li>
      </p>
    </h2>
    <h2>
      Dinner
      <p>
        <li>
        {this.state.food.dinner[1].food} (${this.state.food.dinner[1].price})
        </li>
      </p>
    </h2>
  </div>
  )
}
renderAll(){
  return (
  <div>
    <h2>
      Breakfast
      <p>
        <li>
        {this.state.food.breakfast[0].food} (${this.state.food.breakfast[0].price})
        </li>
        <li>
        {this.state.food.breakfast[1].food} (${this.state.food.breakfast[1].price})
        </li>
        <li>
        {this.state.food.breakfast[2].food} (${this.state.food.breakfast[2].price})
        </li>
      </p>
    </h2>
    <h2>
      Lunch
      <p>
        <li>
        {this.state.food.lunch[0].food} (${this.state.food.lunch[0].price})
        </li>
        <li>
        {this.state.food.lunch[1].food} (${this.state.food.lunch[1].price})
        </li>
        <li>
        {this.state.food.lunch[2].food} (${this.state.food.lunch[2].price})
        </li>
      </p>
    </h2>
    <h2>
      Dinner
      <p>
        <li>
        {this.state.food.dinner[0].food} (${this.state.food.dinner[0].price})
        </li>
        <li>
        {this.state.food.dinner[1].food} (${this.state.food.dinner[1].price})
        </li>
        <li>
        {this.state.food.dinner[2].food} (${this.state.food.dinner[2].price})
        </li>
      </p>
    </h2>
  </div>
  )
}

buttonName() {
  return this.state.veg ? 'Show All': 'Show Only Vegetarian';
}

handleClick = () => {
  this.setState( { veg: !this.state.veg});
}

render(){

  return(
    <div>
    <h1>
      Menu
    </h1>
    <button onClick = {this.handleClick} >
      {this.buttonName()}
    </button>
      {this.state.veg ? this.renderVeg(): this.renderAll()}
      </div>
  );
}
}


ReactDOM.render(<Menu />, document.getElementById("root"));

const food = 
{
  "breakfast": [
    {"food": "pancakes", "price": 5.00, "vegetarian": true},
    {"food": "waffles", "price": 5.00, "vegetarian": true},
    {"food": "orange juice", "price": 2.00, "vegetarian": true}
  ],
  "lunch": [
    {"food": "turkey sandwich", "price": 8.00, "vegetarian": false},
    {"food": "grilled cheese", "price": 6.00, "vegetarian": true},
    {"food": "hamburger", "price": 8.00, "vegetarian": false}
  ],
  "dinner": [
    {"food": "chicken alfredo", "price": 10.00, "vegetarian": false},
    {"food": "tofu stir-fry", "price": 9.00, "vegetarian": true},
    {"food": "chili", "price": 8.00, "vegetarian": false}
  ]
}
