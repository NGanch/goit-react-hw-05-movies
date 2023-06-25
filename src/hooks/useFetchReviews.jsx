import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { fetchInfoReviews } from '../Service/API';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      try {
        setIsLoading(true);

        const response = await fetchInfoReviews(movieId);
        setReviews([...response.results]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getDetails();
  }, [movieId]);

  return { reviews, isLoading, error };
};
