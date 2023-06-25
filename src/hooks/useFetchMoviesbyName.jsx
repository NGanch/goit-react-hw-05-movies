import { fetchMoviesName } from '../Service/API';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

//===================================

export const useFetchMovies = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    const movieName = searchParams.get('query');
    if (!movieName) {
      return;
    }
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const fetchedMoviesName = await fetchMoviesName(movieName);

        setMovie(fetchedMoviesName);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchParams]);
  const handleChange = query => {
    setSearchParams({ query });
  };
  return { movie, isLoading, error, handleChange };
};
