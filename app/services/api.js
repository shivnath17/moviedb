import { fetchData, fetchDataFulfilled, fetchDataRejected } from '../redux/reducer';

const api_key = "0dc2d93b74189c09445602650aa530c1"
const GET_POPULAR_MOVIE_URL ="https://api.themoviedb.org/3/movie/popular?api_key="+api_key+"&language=en-US&page=1"
const RATE_MOVIE ="https://api.themoviedb.org/3/movie/"


export const getPopularMovies = () => {
  const api = fetch(
    GET_POPULAR_MOVIE_URL,
		{
		method: "GET",
    headers: {
			"Content-Type": "application/json",
		},
	}).then(response => {
    return response.json()
  });
  api
    .then(responseJson => {
			console.log("success", responseJson);
			return responseJson
    })
    .catch(error => {
      console.error(error);
    });
  return api;
};

export const rateMovie = (rating, movie_id) => {
  const api = fetch(
    RATE_MOVIE+movie_id+"/rating?api_key="+api_key,
		{
		method: "POST",
    headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({value:rating})
	}).then(response => {
    return response.json()
  });
  api
    .then(responseJson => {
			console.log(responseJson);
			return responseJson
    })
    .catch(error => {
      console.error(error);
    });
  return api;
};
