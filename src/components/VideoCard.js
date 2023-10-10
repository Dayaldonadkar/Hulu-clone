import React, { useState } from "react";
const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = ({ movie }) => {
  const [details, setDetails] = useState(false);

  const getDetails = (id) => {
    console.log(id, "id");
    setDetails(true);
  };

  return (
    <div>
      <img
        onClick={() => getDetails(movie.id)}
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
