import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            history.push('/')
        }
    }
    render() {
        const { location } = this.props;
        return (
            <div className="movies">
            <div className="movie">
                <img width='100px' alt={location.state.title} src={location.state.poster}></img>
        <h3 className="movie__title">{location.state.title}</h3>
        <h5 className="movie__year">{location.state.year}</h5>
        <p className="movie__summary">{location.state.summary.slice(0, 180)}</p>
        <p className="movie__genres">{location.state.genres.map((genre, idx) => {
            return <li key={idx} className="movie_genre">{genre}</li>})}
        </p>

            </div>
            </div>
        )
    }
}

export default Detail;