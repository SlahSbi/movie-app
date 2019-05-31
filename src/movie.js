import React from 'react'
import Stars from './stars'


function Movie({ item }) {
    return (<div className="movie-container">
        <Stars val={item.rating} />
        <img className="imgMovie" src={item.image} alt="poster" />
        <span className="movieName">{item.title}</span>

    </div>

    )
}
export default Movie;
