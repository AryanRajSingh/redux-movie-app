import { Routes, Route } from 'react-router-dom';
import './App.scss';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Home from './pages/Home/Home';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import SharedLayout from './pages/SharedLayout/SharedLayout';

// key => 22214b2e
//OMDb API => http://www.omdbapi.com/?i=tt3896198&apikey=22214b2e

function App() {
  return (
    <main>
      <Routes>
        <Route path='redux-movie-app' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='movie/:movieId' element={<MovieDetails />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
