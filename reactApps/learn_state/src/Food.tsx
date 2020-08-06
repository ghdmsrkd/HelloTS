import * as React from 'react';


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

export default Food;