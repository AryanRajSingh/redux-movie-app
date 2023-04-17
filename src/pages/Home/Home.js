import './Home.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/moviesSlice/moviesSlice';

import MovieList from '../MovieList/MovieList';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = 'Harry';
  const showText = 'Sonic';

  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);

  return (
    <section className='home'>
      <div className='container'>
        <div className='banner-image'></div>
        <MovieList />
      </div>
    </section>
  );
};

export default Home;
