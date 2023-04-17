import './MovieList.scss';
import { Navigation, Autoplay, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import MovieCard from '../../components/MovieCard/MovieCard';

import 'swiper/css';
import 'swiper/css/navigation';

const MovieList = () => {
  const { Search: movies } = useSelector((state) => state.movies.movies);
  const { Search: shows } = useSelector((state) => state.movies.shows);

  if (!movies) {
    return (
      <section className='movie-list movie-loading'>
        <div className='lds-ring'>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className='movie-list'>
        <h2>Movies</h2>
        <div className='box'>
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={10}
            loop={true}
            autoplay={{
              delay: 1400,
              disableOnInteraction: false,
            }}
            navigation
          >
            {movies?.map((movie) => (
              <SwiperSlide className='swiper-slide-movie' key={movie.imdbID}>
                <MovieCard {...movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className='movie-list'>
        <h2>Shows</h2>
        <div className='box'>
          <Swiper
            modules={[Navigation, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={10}
            loop={true}
            autoplay={{
              delay: 1400,
              disableOnInteraction: false,
            }}
            navigation
          >
            {shows?.map((movie) => (
              <SwiperSlide className='swiper-slide-movie' key={movie.imdbID}>
                <MovieCard {...movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default MovieList;
