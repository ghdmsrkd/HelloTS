import React from "react";
import "./App.css";

interface info {
    id: number,
    year: number,
    title: string,
    summary: string,
    poster: string,
    genre: string[]
}

function Movie(info: info) {

    return (
        <div className="movie">
            <img src={info.poster} alt={info.title} title={info.title} />
            <div className="movie_data">
                <h3 className="movie_title">{info.title}</h3>
                <h5 className="movie_year">{info.year}</h5>
                <ul className="movie_genres">
                    {info.genre && info.genre.map((genre: string, index: number) => (
                        <li key={index} className="genres_genre">{genre}</li>
                    ))}

                </ul>
                <p className="movie_summary">{info.summary}</p>
            </div>
        </div>
    );
}



export default Movie;