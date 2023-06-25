import { useLocation } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import { Button } from '../Button/Button';
import {
  MainDetails,
  Container,
  IMG,
  ContainerInfo,
  TitleDetail,
  UserScore,
  Span,
  TitleOverview,
  POverview,
  TitleGenres,
  GenresList,
  GenresP,
  LinkList,
  CastItem,
  CastLink,
  ReviewsItem,
  ReviewsLink,
} from '../MovieDetails/MovieDetails.styled';

import { useFetchDetails } from 'hooks/useFetchMovieDitails';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';
import { routes } from 'routes';
//=============================================

export function MovieDetails() {
  const { details, isLoading, error } = useFetchDetails();

  const location = useLocation();
  const buttonHref = location.state?.from ?? routes.Movies;
  return (
    <MainDetails>
      {isLoading && <Loader />}
      {error && <p>Sorry. There are no images ... 😭</p>}
      {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })}
      <Button to={buttonHref}>Back to List</Button>
      <div>
        {details.map(
          ({
            original_title,
            poster_path,
            release_date,
            popularity,
            genres,
            overview,
          }) => (
            <Container>
              <IMG
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={original_title}
              />
              <ContainerInfo>
                <TitleDetail>
                  {original_title} ({release_date})
                </TitleDetail>
                <UserScore>
                  User Score<Span>{popularity}</Span>
                </UserScore>
                <TitleOverview>Overview</TitleOverview>
                <POverview>{overview}</POverview>
                <TitleGenres>Genres</TitleGenres>
                <GenresList>
                  {genres.map(({ name }) => {
                    return <GenresP>{name}</GenresP>;
                  })}
                </GenresList>
              </ContainerInfo>
            </Container>
          )
        )}
      </div>

      <LinkList>
        <CastItem>
          <CastLink to="cast">Cast</CastLink>
        </CastItem>
        <ReviewsItem>
          <ReviewsLink to="reviews">Reviews</ReviewsLink>
        </ReviewsItem>
      </LinkList>
      <Outlet />
    </MainDetails>
  );
}
//=============================================
// export function MovieDetails(){

//     const [details, setDetails] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);
//  //===================================

// const { movieId } = useParams();

// useEffect(() => {
//     async function getDetails() {
//       try {
//         setIsLoading(true);
//         const response = await fetchTrendingInfoMovie(movieId);
//         console.log(response)
//         setDetails([response]);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     getDetails();
//   }, [movieId]);

//   const location = useLocation();
//   const buttonHref = location.state?.from ?? "/movies";
//   return(
// <MainDetails>
//   {isLoading && <Loader />}
//       {error && <p>Sorry. There are no images ... 😭</p>}
//     <Button to={buttonHref}>Back to List</Button>
//     <div>
//       {details.map(({original_title, poster_path, release_date, popularity, genres, overview}) => (

//        <Container>
//         <IMG  src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={original_title} />
//         <ContainerInfo>

//         <TitleDetail>{original_title} ({release_date})</TitleDetail>
//         <UserScore>User Score<Span>{popularity}</Span></UserScore>
//         <TitleOverview>Overview</TitleOverview>
//         <POverview>{overview}</POverview>
//         <TitleGenres>Genres</TitleGenres>
//         <GenresList>
//             {genres.map(({name}) => {
//                 return(
//                     <GenresP>{name}</GenresP>
//                 )
//             })}
//         </GenresList>
//         </ContainerInfo>
//     </Container>
//       ))}
//     </div>

//         <LinkList>
//         <CastItem>
//           <CastLink to="cast">Cast</CastLink>
//         </CastItem>
//         <ReviewsItem>
//           <ReviewsLink to="reviews">Reviews</ReviewsLink>
//         </ReviewsItem>
//       </LinkList>
//       <Outlet />
//       </MainDetails>

//   )
// }
