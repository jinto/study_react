import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css'

function Movie({year, title, summary, poster, genres}) {
  return (
    <div className="movie">
      <img width='100px' alt={title} src={poster}></img>
      <h3 className="movie__title">{title}</h3>
      <h5 className="movie__year">{year}</h5>
      <p className="movie__summary">{summary.slice(0, 180)}</p>
      <p className="movie__genres">{genres.map((genre, idx) => {
        return <li key={idx} className="movie_genre">{genre}</li>})}
      </p>
    </div>
  )
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}


export default Movie;