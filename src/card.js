import React from 'react';
import Movie from './movie';

const Card = ({ filtred1, filtred2 }) => {

    return (<div className="card-container">

        {filtred1.map((el, i) => (filtred2.includes(el) && <Movie key={el.id} item={el} />))}



    </div>)

}






export default Card;
