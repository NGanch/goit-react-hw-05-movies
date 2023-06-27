import { fetchMoviesName } from '../Service/API';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { Navigate } from "react-router-dom";
import { routes } from 'routes';

import { useNavigate } from "react-router-dom";
//===================================

export const useFetchMovies = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
  
    const movieName = searchParams.get('query');
    if (!movieName) {
      return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const fetchedMoviesName = await fetchMoviesName(movieName);
        // setIsLoginSuccess(fetchedMoviesName.success);
        if (fetchedMoviesName.success) {
          navigate(routes.HOME, { replace: true });
        }
        console.log(fetchedMoviesName)
       
        setMovie(fetchedMoviesName);
        // if (isLoginSuccess) {
        //   return <Navigate to={routes.HOME} replace />;
        // }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [navigate, searchParams]);

  // console.log(isLoginSuccess)
  const handleChange = query => {
    setSearchParams({ query });
  };
  return { movie, isLoading, error, handleChange };
};
