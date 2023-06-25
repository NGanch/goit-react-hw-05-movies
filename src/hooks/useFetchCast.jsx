import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchInfoCast } from '../Service/API';

export const useFetchCast = () => {
  const [cast, setCast] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);

        const response = await fetchInfoCast(movieId);
        setCast([...response.cast]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [movieId]);

  return { cast, isLoading, error };
};
