import * as React from 'react';
import { useState, useEffect, useRef } from 'react';

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

  export default Count;