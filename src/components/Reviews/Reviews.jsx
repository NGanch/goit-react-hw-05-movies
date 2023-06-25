import {
  ReviewsList,
  ReviewsItem,
  ReviewsTitle,
  ReviewsP,
} from '../Reviews/Reviews.styled';
import { useFetchReviews } from 'hooks/useFetchReviews';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';
//=============================================
export function Reviews() {
  const { reviews, isLoading, error } = useFetchReviews();
  return (
    <ReviewsList>
      {isLoading && <Loader />}
      {error && <p>Sorry. There are no images ... 😭</p>}
      {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })}
      {reviews.map(({ id, author, content }) => {
        return (
          <ReviewsItem key={id}>
            <ReviewsTitle>Author: {author}</ReviewsTitle>
            <ReviewsP>{content}</ReviewsP>
          </ReviewsItem>
        );
      })}
    </ReviewsList>
  );
}
//=============================================

