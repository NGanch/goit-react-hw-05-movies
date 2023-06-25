import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

// import { Layout } from './Layout/Layout';
// import { Home } from '../Page/Home/Home';
// import { Movies } from '../Page/Movies/Movies';
// import { MovieDetails } from './MovieDetails/MovieDetails';
// import { Cast } from '../components/Cast/Cast';
// import { Reviews } from '../components/Reviews/Reviews';

const Layout = lazy(() => import('./Layout/Layout'));
const Home = lazy(() => import('../Page/Home/Home'));
const Movies = lazy(() => import('../Page/Movies/Movies'));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
