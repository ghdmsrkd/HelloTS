import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import defaultAxios from "axios";
import Count from "./Count";
import Food from "./Food";
import UseTitle from "./UseTitle";
import UseInput from "./UseInput";
import UseClick from "./UseClick";
import UseAxios from "./UseAxios";

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

function renderFood(dish: foodProps, key: number) {
  return <Food name={dish.name} image={dish.image} key={key} />;
}

function App() {
  // const maxLength = (value: string) => value.length <= 10;
  // const name = UseInput("Mr. ", maxLength);

  // const sayYes = () => console.log("Yes!!");
  // const [number, setNumber] = useState(0);
  // const [aNumber, setANumber] = useState(0);
  // useEffect(sayYes, [number]);

  // const titleUpdater = UseTitle("Loading ...");
  // setTimeout(() => titleUpdater('wellcome'), 3000);

  // const potato: any = useRef();
  // setTimeout(() => console.log(potato.current), 5000);

  // const sayHello = () => console.log("say hello")
  // const title: any = UseClick(sayHello);

  const { loading, error, data, refetch } = UseAxios({ url: "https://yts.am/api/v2/list_movies.json" });
  console.log(loading, data, error);

  return (
    <div className="App">
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
      {/* 
      <h1 ref={title}>Hi</h1>

      <input ref={potato} placeholder="la" />


      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <button onClick={() => setANumber(aNumber + 1)}>{aNumber}</button>

      <Count />
      <input placeholder="Name" {...name} />
      <input type="text" />

      {console.log(foods.map((food, i) => renderFood(food, i)))}
      {foods.map((food, i) => renderFood(food, i))} */}
    </div>
  );
}

export default App;
