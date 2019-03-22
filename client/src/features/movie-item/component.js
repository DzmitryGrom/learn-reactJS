import React from 'react'

import './component.less'

const MovieItem = ({image, title, year, genre}) => {
  return  (
    <div className="movie-item">
      <div style={{backgroundImage: `url(${image})`}} className="movie-item__img"/>
      <div className="movie-item__info">
        <div>
          <h3 className="movie-item__title">{title}</h3>
          <h4 className="movie-item__genre">{genre}</h4>
        </div>
        <span className="movie-item__year">{year}</span>
      </div>
    </div>
  )
};

export default MovieItem;