import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { BackLink } from '../../components/Button/BackLink';
import { Searchbar } from '../../components/Searchbar/Searchbar';
import { MovieList } from '../../components/MovieList/MovieList';
import { Loader } from '../../components/Loader/Loader';
import { MovieMain } from '../../components/MovieList/MovieList.styled';
import { routes } from 'routes';
import { useFetchMovies } from 'hooks/useFetchMoviesbyName';

//================================================================================================
export function Movies() {
  const location = useLocation();
  const { movie, isLoading, error, handleChange } = useFetchMovies();

  const goBackLink = location?.state?.from ?? routes.HOME;

  return (
    <MovieMain>
      {isLoading && <Loader />}
      {/* {error && <p style={{color: 'white'}}>Sorry. There are no muvies ... 😭</p>} */}
      {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })}
      <BackLink to={goBackLink}>Back to Home</BackLink>
      <Searchbar onSubmit={handleChange} />
      {movie && <MovieList movie={movie} />}

      <ToastContainer autoClose={3000} />
    </MovieMain>
  );
}
// //=====================================================================
//   const [query, setQuery] = useState('batman');

//   const [movie, setMovie] = useState([]);
//   const [isEmpty, setIsEmpty] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   //===================================

//   useEffect(() => {
//     const abortCtrl = new AbortController();

//     async function getImage() {

//       try {
//         setIsLoading(true);
//         const response = await fetchMovies(query, abortCtrl);
//         console.log(response);
//         const { results } = response;
//         if (!results.length) {
//           setIsEmpty(true);
//           return;
//         }
//         setMovie([...results]);
//       } catch (error) {
//         // setError(error.message);
//         console.log(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getImage();
//     return () => {
//       abortCtrl.abort();
//     };
//   }, [query]);
//   //------------------------------

//       const location = useLocation();
//       const backLinkHref = location.state?.from ?? "/";
//   const handleFormSubmit = value => {
//     setQuery(value);
//     setMovie([]);
//     setIsEmpty(false);
//     setIsLoading(false);
//   };

//   return (
//     <>
//       <MovieMain>
//       <BackLink to={backLinkHref} >Back to Home</BackLink>
//         <Searchbar onSubmit={handleFormSubmit} />
//         <MovieList movie={movie} />
//       </MovieMain>
//       <>
//         {/* {isEmpty && <p>Sorry. There are no images ... 😭</p>} */}
//         {isLoading && <Spinner />}
//         {isEmpty &&
//           toast.error('Sorry. There are no images ... 😭', {
//             position: 'top-center',
//             theme: 'light',
//           })}

//         <ToastContainer autoClose={3000} />
//       </>
//     </>
//   );
// }
