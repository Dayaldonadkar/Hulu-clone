import React from "react";
const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = ({ movie }) => {
  return (
    <div>
      <img
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
