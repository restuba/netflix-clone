import { Get } from './Method';

// watch popular
const getDiscoverStreaming = 'discover/movie?sort_by=popularity.desc';
const getDiscoverOnTv = 'tv/popular';
const getDiscoverForRent = 'movie/popular';
const getDiscoverInTheaters = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22';
// free to watch
const getMovieDrama = 'discover/movie?with_genres=18&with_cast=500&sort_by=vote_average.desc';
const getTvDrama = 'discover/tv?with_genres=18&with_cast=500&sort_by=vote_average.desc';

// get discover
const getDiscover = (path) => Get(path);


// get genre list
const getGenreList = (path) => Get(path);

// get data base on filter
const getResultFilter = (type, sortby, genre, page) => {
  genre === undefined || genre === false || genre.length === 0 ? genre = '' :
  genre = `with_genres=${genre}&`;
  console.log(genre)
  if(sortby === undefined && genre === ''){
    return Get(`${type}?`, page);
  }
  if(sortby === undefined || genre === ''){
    return Get(`${type}?`, page);
  }
  return Get(`discover/${type}?${genre}sort_by=${sortby}`, page);
} 


// get details
const getDetails = (type, id) => Get(`${type}/${id}`);

// get video trailer
const getVideo = (type, id) => Get(`${type}/${id}/videos`);

export const API = {
  getDiscoverStreaming: getDiscoverStreaming,
  getDiscoverOnTv: getDiscoverOnTv,
  getDiscoverForRent: getDiscoverForRent,
  getDiscoverInTheaters: getDiscoverInTheaters,

  getMovieDrama: getMovieDrama,
  getTvDrama: getTvDrama,
  
  getGenreList: getGenreList,
  getResultFilter: getResultFilter,
  getDiscover: getDiscover,
  getDetails: getDetails,
  getVideo: getVideo
}