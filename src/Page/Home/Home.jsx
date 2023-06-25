
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import {
  HomeMain,
  HomeTitle,
  HomeList,
  HomeItem,
  StyledLink,
  IMG,
  MovieP,
} from '../Home/Home.styled';
import { useFetchHomeMuvies } from 'hooks/useFetchHomeMuvies';
import { toast } from 'react-toastify';
import { routes } from 'routes';
//=====================================================================

export function Home() {
  const location = useLocation();
  const { popular, isLoading, error } = useFetchHomeMuvies();

  return (
    <HomeMain>
      {isLoading && <Loader />}
      {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })}
      <HomeTitle>Trending today</HomeTitle>
      {popular.length > 0 && (
        <HomeList>
          {popular.map(({ id, title, original_title, poster_path }) => {
            return (
              <HomeItem key={id}>
                <StyledLink to={`${routes.Movies}/${id}`} state={{ from: location }}>
                  <IMG
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                  />
                  <MovieP>{title}</MovieP>
                </StyledLink>
              </HomeItem>
            );
          })}
        </HomeList>
      )}
    </HomeMain>
  );
}
// //=====================================================================

