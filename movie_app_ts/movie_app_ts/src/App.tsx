import * as React from 'react';
import { useState } from 'react';

interface foodProps {
  name: string,
  image: string
}

const foods: foodProps[] = [
  {
    name: "kimchi",
    image: "https://placeimg.com/200/200/10/10/any/0"
  },
  {
    name: "chicken",
    image: "https://placeimg.com/200/200/10/10/any/1"
  },
  {
    name: "ramen",
    image: "https://placeimg.com/200/200/10/10/any/2"
  },
  {
    name: "gogii",
    image: "https://placeimg.com/200/200/10/10/any/3"
  }
];

function Food(props: foodProps) {
  return (
    <h2>
      I love {props.name}<p />
      <img src={props.image} />
    </h2>
  );
}

function renderFood(dish: foodProps, key: number) {
  return <Food name={dish.name} image={dish.image} key={key} />;
}

const Count = () => {
  const [item, setItem] = useState(2);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <h1>useState Testing...  {item}</h1>
      <h2>please push button!</h2>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );

}

function App() {
  return (
    <div className="App">
      <Count />
      {console.log(foods.map((food, i) => renderFood(food, i)))}
      {foods.map((food, i) => renderFood(food, i))}
    </div>
  );
}

export default App;
