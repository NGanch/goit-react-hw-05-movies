export const transformCountryData = data => {
    return data.map(
      ({
        id, title, poster_path
      }) => ({
        id: id,
        title: title,
        poster_path: poster_path,
   
      }),
    );
  };