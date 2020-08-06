import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import defaultAxios from "axios";
import Count from "./Count";

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

const useTitle =(initialTitle : string) => {
  const[title, setTitle] = useState(initialTitle);
  const updateTitle =() =>{
    const htmlTitle : any = document.querySelector("title");
    htmlTitle.innerText = title;
  }
  useEffect(updateTitle, [title]);
  return setTitle;
}

const useClick = (onClick : any) =>{
  const element : any = useRef();

  useEffect(() => {
    if (element.current){
      element.current.addEventListener("click", onClick)
    }

    return () => {
      if(element.current){
        element.current.removeEventListener("click", onClick);
      }
    }
  }, []);

  return element;
}

const useAxios = (opts : { url: string }, axiosInstance = defaultAxios) =>{
  const[state, setState] = useState({
    loading : true,
    error: null,
    data : undefined
  });

  const[trigger, setTrigger] = useState(0);

  const refetch =() =>{
    setState({
      ...state,
      loading:true
    });
    setTrigger(Date.now());
  }
  useEffect(() => {
    if (opts.url) {
      axiosInstance(`https://cors-anywhere.herokuapp.com/${opts.url.split('://')[1]}`, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'
        }
      })
      .then(data => {
        setState({
          ...state,
          loading : false,
          data : data.data
        })
        console.log(state);
      })
      .catch(error => {
        setState({...state, loading : false, error})
      })
    }
  }, [trigger]);

  return {...state, refetch}
}

function App() {
  

  const maxLength = (value: string) => value.length <= 10;
  const name = useInput("Mr. ", maxLength);

  const sayYes =() => console.log("Yes!!");
  const [number, setNumber] = useState(0);
  const [aNumber, setANumber] = useState(0);
  useEffect(sayYes, [number]);

  const titleUpdater = useTitle("Loading ...");
  setTimeout(() => titleUpdater('wellcome'), 3000);

  const potato : any = useRef();
  setTimeout(() => console.log(potato.current), 5000);

  const sayHello = () => console.log("say hello")
  const title : any = useClick(sayHello);

  const {loading, error, data, refetch} = useAxios({url : "https://yts.am/api/v2/list_movies.json"} );
  console.log(loading, data, error);

  return (
    <div className="App">

      
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>

      <h1 ref={title}>Hi</h1>

      <input ref={potato} placeholder="la"/>
      

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
