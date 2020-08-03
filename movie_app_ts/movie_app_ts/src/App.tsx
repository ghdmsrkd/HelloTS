import * as React from 'react';

interface foodProps {
  fav: string
}

function Food(props: foodProps) {
  return (
    <h2>
      I love {props.fav}
    </h2>
  );
}

function App() {
  return (
    <div className="App">
      <Food fav={"kimchi"} />
      <Food fav={"chicken"} />
      <Food fav={"ramen"} />
      <Food fav={"gogii"} />
    </div>
  );
}

export default App;
