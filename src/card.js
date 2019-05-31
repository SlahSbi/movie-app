import React from 'react';
import Movie from './movie';
import AddMovie from './addmovie';

const Card = ({ filtred1, filtred2, onAddMovie = () => { } }) => {

    return (<div className="card-container">

        {filtred1.map((el) => (filtred2.includes(el) && <Movie key={el.id} item={el} />))}
        <AddMovie mov={onAddMovie} />

    </div>)

}






export default Card;
