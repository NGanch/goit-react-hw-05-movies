import axios from 'axios';

//=======================
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'c50f16584540f084a15313cb9781232d',
    language: 'en-US',
  }
});

 //=========================Запит списку фільмів HOME=========================

// export async function fetchTrendingMovies(){
//   try{
//     const {data} = await instance.get('/tv/popular');
//     return data;
//   } catch(error){
//     throw error;
//   }
// }

export async function fetchPopularMovies(){
    const {data} = await instance.get('/trending/all/week');
    const popular = data.results;
    return popular;

}
// axios.defaults.baseURL = 'https://restcountries.com/v3.1';

// export const getCountries = async () => {
//   const { data } = await axios.get('/region/europe');
//   const countries = transformCountriesData(data);

//   return countries;
// };
 //=========================Запит списку фільмів MOVIE=========================


//  export const fetchMovies = async(query, abortCtrl) => {
//   try {
//    const API_KEY = 'c50f16584540f084a15313cb9781232d';
//    const responce = await axios.get('https://api.themoviedb.org/3/search/movie',{
//            params: {
//             api_key: API_KEY,
//             include_adult: 'false',
//              language: 'en-US', 
//              page: '1', 
//              query: query,
//              signal: abortCtrl.signal,
            
//            },
//          });
      
//  return responce.data;
//         }catch (error) {
//           console.log(error.message);
//         } 
//  }
// export const fetchCountry = async(name) => {

//   const {data}  = await instance.get(`/search/movie/${name}`);
//   const country = transformCountryData(data.results);
//   return country;
  
// }
export const fetchMoviesName = async(query) => {
   const API_KEY = 'c50f16584540f084a15313cb9781232d';
   const {data} = await axios.get('https://api.themoviedb.org/3/search/movie',{
           params: {
            api_key: API_KEY,
            include_adult: 'false',
            language: 'en-US', 
            page: '1', 
            query: query,
           },
         });

  const movie = data.results;
  return movie;
  
}
 // export const fetchCountry = async name => {
//   const { data } = await axios.get(`/name/${name}`);
//   const country = transformCountryData(data);

//   return country[0];
// };
//================================================================


 //=========================Запит повної інфо фільма =========================
// export async function fetchTrendingInfoMovie(id){

//     const {data} = await instance.get(`/movie/${id}`);
//     return data;

// }
export async function fetchTrendingInfoMovie(movieId){
  const {data} = await instance.get(`/movie/${movieId}`);
  return data;
}
 //=========================Запит акторського складу =========================
 
export async function fetchInfoCast(movieId){
    const {data} = await instance.get(`/movie/${movieId}/credits`);
    return data;

}
 //=========================запит оглядів для сторінки кінофільму =========================
 export async function fetchInfoReviews(movieId){

    const {data} = await instance.get(`/movie/${movieId}/reviews`);
    return data;
}
 //=========================запит оглядів для сторінки кінофільму =========================
