import { Link } from 'react-router-dom';
import './Header.scss';
import user from '../../images/user.png';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/moviesSlice/moviesSlice';

const Header = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };

  return (
    <header className='header'>
      <div className='container'>
        <Link to='/redux-movie-app'>
          <span>Movie App</span>
        </Link>

        <div className='searchbar'>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder='Search for Movies or Shows'
            />
            <button type='submit'>
              <FaSearch />
            </button>
          </form>
        </div>

        <div className='user-img'>
          <img src={user} alt='user' />
        </div>
      </div>
    </header>
  );
};

export default Header;
