export const baseUrl = "https://api.themoviedb.org/"
export const API_KEY = "76ed2d8100c27e08de79ca148f75c2be"
export const ImageUrl = "https://image.tmdb.org/t/p/original"

export const HomeAPIUrl = {
    list: [
      { genre: "Movies", url: "3/genre/movie/list?" },
      { genre: "Latest", url: "3/movie/latest?" },
      { genre: "Top Rated", url: "3/movie/top_rated?language=en-US&page=1?" },
      { genre: "Trending Show", url: "3/trending/tv/day?language=en-US?" },
      { genre: "Popular", url: "3/movie/popular?language=en-US&page=1?" }
    ]
  };