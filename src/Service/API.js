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

export async function fetchPopularMovies(){
    const {data} = await instance.get('/trending/all/week');
    const popular = data.results;
    return popular;
}

 //=========================Запит списку фільмів MOVIE=========================

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

 //=========================Запит повної інфо фільма =========================
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
