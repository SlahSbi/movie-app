import React from 'react';

const AddMovie = ({ mov }) => {
  return (<div className="new-movie-card"
    onClick={() => {
      mov({
        id: Math.random(),
        rating: Number(prompt('movie rating: ')),
        image: require(`./${prompt('movie image:')}`),
        title: prompt('movie title: ')
      })
    }}>
    +

  </div>)

}

export default AddMovie;



