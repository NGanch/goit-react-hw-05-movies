import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchTrendingInfoMovie } from '../Service/API';

export const useFetchDetails = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log(movieId);

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);
        const response = await fetchTrendingInfoMovie(movieId);
        console.log(response);
        setDetails([response]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getDetails();
  }, [movieId]);

  return { details, isLoading, error };
};
