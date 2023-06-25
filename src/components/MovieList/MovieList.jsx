import { useLocation } from "react-router-dom";

import {
  MovieMain,
  MovieListContainer,
  ContainerItem,
  MovieName,
  IMG,
  MovieP,
} from '../MovieList/MovieList.styled';



export const MovieList = ({ movie }) => {
  const location = useLocation();
  return (
    <MovieMain>
      <MovieListContainer>
        {movie.map(({ id, title, poster_path }) => (
          <ContainerItem key={id}>
            <MovieName to={`${id}`} state={{from:location}}>
              <IMG
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
              />
              <MovieP>{title}</MovieP>
            </MovieName>
          </ContainerItem>
        ))}
      </MovieListContainer>
    </MovieMain>
  );
};

