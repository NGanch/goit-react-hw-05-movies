import { lazy } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import { routes } from 'routes';
import { Layout } from './Layout/Layout';
// import { Home } from '../Page/Home/Home';
// import { Movies } from '../Page/Movies/Movies';
// import { MovieDetails } from './MovieDetails/MovieDetails';
// import { Cast } from '../components/Cast/Cast';
// import { Reviews } from '../components/Reviews/Reviews';

const Home = lazy(() => import('../Page/Home/Home'));
const Movies = lazy(() => import('../Page/Movies/Movies'));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<Layout />}>
       <Route index element={<Home />} />
        <Route path={routes.Movies} element={<Movies />} />
        <Route path={routes.Movies_ID} element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
