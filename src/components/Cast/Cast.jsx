import { CastList, CastItem, IMG, CastTitle, CastP } from '../Cast/Cast.styled';
import { useFetchCast } from 'hooks/useFetchCast';
import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';
//=============================================
const Cast = () =>{
  const { cast, isLoading, error } = useFetchCast();
  return (
    <CastList>
      {isLoading && <Loader />}
      {error && <p>Sorry. There are no images ... 😭</p>}
      {error &&
        toast.error('Sorry. There are no muvies ... 😭', {
          position: 'top-center',
          theme: 'light',
        })}
      {cast.map(({ id, original_name, profile_path, character }) => {
        return (
          <CastItem key={id}>
            {profile_path ? (
              <IMG
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={original_name}
              />
            ) : (
              <IMG src="https://i.pinimg.com/236x/be/0b/c9/be0bc94db984f5329afef2e0dacb8d55.jpg" />
            )}

            <CastTitle>{original_name}</CastTitle>
            <CastP>Character: {character}</CastP>
          </CastItem>
        );
      })}
    </CastList>
  );
}
export default Cast;
//=============================================


