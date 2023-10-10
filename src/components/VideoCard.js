import React, { useState } from "react";
const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = ({ movie }) => {
  const [details, setDetails] = useState(false);

  const movieDetails = async (id) => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=166b3b87d35b5238f944c71f3d835364`
      );
      const data = await res.json();
      console.log(data, "details");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <img
        onClick={() => movieDetails(movie.id)}
        className="h-72 w-full transistion duration-100 transform hover:scale-105"
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />

      <p>{movie.overview}</p>
      <h2>{movie.title || movie.original_name}</h2>
      <p>{movie.vote_count}</p>
    </div>
  );
};

export default VideoCard;
