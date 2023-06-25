import { useState, useEffect } from 'react';
import { fetchPopularMovies } from '../Service/API';

export const useFetchHomeMuvies = () => {
  const [popular, setPopular] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedCountries = await fetchPopularMovies();
        console.log(fetchedCountries)
        setPopular(fetchedCountries);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { popular, isLoading, error };
};
