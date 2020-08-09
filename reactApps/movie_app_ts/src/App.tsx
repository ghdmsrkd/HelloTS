import * as React from 'react';
//import { useState, useEffect, useRef } from 'react';
import UseAxios from "./UseAxios"
import Movie from "./Movie"
import "./App.css";

function App() {
  const { loading, error, data, refetch } = UseAxios({ url: "https://yts.am/api/v2/list_movies.json?sort_by=rating" });
  //console.log(loading, error, data);
  const movies = data;
  console.log();

  return (
    <div className="App">
      <section className="container">
        {loading ?
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
          :
          <div className="movies">{
            movies.map(movie => {
              //console.log(movie['title']);
              return <Movie
                key={movie['id']}
                id={movie['id']}
                year={movie['year']}
                title={movie['title']}
                summary={movie['summary']}
                poster={movie['medium_cover_image']}
                genre={movie['genres']}
              />
            })}
          </div>
        }
      </section>

    </div>
  );
}

export default App;
