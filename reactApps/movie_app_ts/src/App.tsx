import * as React from 'react';
import UseAxios from "./utils/UseAxios"
import Movie from "./components/Movie"
import "./App.css";

function App() {
  const { loading, error, data } = UseAxios({ url: "https://yts.am/api/v2/list_movies.json?sort_by=rating" });
  const movies = data;

  return (
    <span>
      somthing...
    </span>
  );
}

export default App;
