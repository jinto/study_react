import React from 'react';
import PropTypes from 'prop-types';

function Movie({id, year, title, summary, poster}) {
  return (
    <div class="movie__data">
      <h3 class="movie_title">{title} - {year}</h3>
      <p class="movie__summary">{summary}</p>
      <img width='100px' alt={title} src={poster}></img>
    </div>
  )
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}


export default Movie;