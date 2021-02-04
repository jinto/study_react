import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function Movie({id, year, title}) {
  return (
    <div>
      <h1>{title}</h1>
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

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  }

  getMovies = async () => {
    const {data:{data:{movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({movies, isLoading: false})
    console.log(this.state.movies)
  }
  componentDidMount() {
    this.getMovies()
  }
  render() {
    const { isLoading, movies } = this.state
    return (
      <div>{isLoading? 'Loading...': 'Ready'}
      {
        movies.map(movie=> 
          <Movie id={movie.id} 
            year={movie.year} 
            title={movie.title}
            summary={movie.summary}
            poster={movie.poster}
          />
        )
      }
      </div>
    )
  }
}

export default App;