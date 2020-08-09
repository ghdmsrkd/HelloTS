import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import UseAxios from "./UseAxios"


function App() {
  const { loading, error, data, refetch } = UseAxios({ url: "https://yts.am/api/v2/list_movies.json?sort_by=rating" });
  //console.log(loading, error, data);
  const movies = data;
  console.log(movies);



  return (
    <div className="App">
      <h1>{loading ? "Loading..." : "data"}</h1>

    </div>
  );
}

export default App;
