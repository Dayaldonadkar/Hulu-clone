const API_KEY = "166b3b87d35b5238f944c71f3d835364";

export default {
  fetchTrending: `/trending/all/week?api_key=166b3b87d35b5238f944c71f3d835364&language=en-US`,

  fetchTopRated: `/movie/top_rated?api_key=166b3b87d35b5238f944c71f3d835364language=en-US`,

  fetchActionMovies: `/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=28`,

  fetchHorrorMovies: `/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=27`,

  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,

  fetchMystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,

  fetchSciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,

  fetchWestern: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

  fetchAnimation: `/discover/movie?api_key=${API_KEY}&with_genres=16`,

  fetchTV: `/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=10770`,
};
