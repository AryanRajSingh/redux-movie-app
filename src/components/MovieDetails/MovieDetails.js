import './MovieDetails.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchAsyncMovieOrShowDetail } from '../../features/moviesSlice/moviesSlice';
import { removeSelectedMovieOrShow } from '../../features/moviesSlice/moviesSlice';
import { FaCalendar, FaFilm, FaStar, FaThumbsUp } from 'react-icons/fa';

const MovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const selectedMovie = useSelector((state) => state.movies.selectMovieOrShow);

  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(movieId));
    setLoading(false);
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, movieId]);

  if (loading) {
    return (
      <section className='movie-detail movie-loading'>
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }

  const {
    Title: title,
    Actors: actors,
    Director: director,
    Year: year,
    imdbVotes: votes,
    imdbRating: rating,
    Runtime: runtime,
    Awards: awards,
    Genre: genre,
    Language: lang,
    Plot: plot,
    Poster: poster,
  } = selectedMovie;

  return (
    <section className='movie-detail'>
      <div className='container'>
        <div className='movie-section'>
          <div className='movie-section__left'>
            <h2>{title}</h2>
            <div className='movie-section__left__info-top'>
              <span>
                IMDB Rating <FaStar className='icon-star' /> : {rating}
              </span>
              <span>
                IMDB Votes <FaThumbsUp />: {votes}
              </span>
              <span>
                IMDB Runtime <FaFilm /> : {runtime}
              </span>
              <span>
                IMDB Year <FaCalendar /> : {year}
              </span>
            </div>
            <p>{plot}</p>
            <div className='movie-section__left__info-bottom'>
              <div>
                <span>Director</span>
                <span>{director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{actors}</span>
              </div>
              <div>
                <span>Genres</span>
                <span>{genre}</span>
              </div>
              <div>
                <span>Language</span>
                <span>{lang}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{awards}</span>
              </div>
            </div>
          </div>
          <figure className='movie-section__right'>
            <img src={poster} alt={title} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
