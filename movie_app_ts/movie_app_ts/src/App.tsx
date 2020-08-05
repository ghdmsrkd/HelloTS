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
      <img src={props.image} alt="food" />
    </h2>
  );
}

function renderFood(dish: foodProps, key: number) {
  return <Food name={dish.name} image={dish.image} key={key} />;
}

const Count = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div>
      <h1>useState Testing...  {item}</h1>
      <button onClick={incrementItem}>increment</button>
      <button onClick={decrementItem}>decrement</button>
    </div>
  );

}

const useInput = (initialValue: string, validator: Function) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event: any) => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    //if (typeof validator === "function") {
    willUpdate = validator(value);
    //}
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

function App() {
  const maxLength = (value: string) => value.length <= 10;
  const name = useInput("Mr. ", maxLength);

  const sayYes =() => console.log("Yes!!");
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  React.useEffect(sayYes, [number]);

  return (
    <div className="App">

  <button onClick={() => setNumber(number +1)}>{number}</button>
  <button onClick={() => setANumber(aNumber +1)}>{aNumber}</button>




      <Count />
      <input placeholder="Name" {...name} />
      <input type="text" />

      {console.log(foods.map((food, i) => renderFood(food, i)))}
      {foods.map((food, i) => renderFood(food, i))}
    </div>
  );
}

export default App;
