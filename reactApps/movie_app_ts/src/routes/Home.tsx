import * as React from 'react';
import UseAxios from "../utils/UseAxios"
import Movie from "../components/Movie"
import "./Home.css";

function Home() {
  const { loading, data } = UseAxios({ url: "https://yts.am/api/v2/list_movies.json?sort_by=rating" });
  const movies = data;

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

export default Home;
