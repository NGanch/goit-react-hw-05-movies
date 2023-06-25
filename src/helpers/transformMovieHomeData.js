// export const transformCountriesData = data => {
//     return data.map(
//       ({ name: { common }, capital, flags, population, languages }) => ({
//         id: common,
//         country: common,
//         flag: flags.png,
//         capital,
//         population,
//         languages,
//       }),
//     );
//   };

export const transformMovieHomeData = data => {
    return data.map(
      ({  id, name, poster_path }) => ({
        id: id,
        name: name,
        poster_path: poster_path,
      }),
    );
  };

  export const transformMovieDetailsData = data => {
    return data.map(
      ({  original_title, poster_path, release_date, popularity, genres, overview }) => ({
        original_title: original_title,
        poster_path: poster_path,
        release_date: release_date,
        popularity: popularity,
        genres: genres,
        overview: overview,
      }),
    );
  };
 