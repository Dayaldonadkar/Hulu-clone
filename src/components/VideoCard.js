import React, { useState } from "react";
import RecommendIcon from "@mui/icons-material/Recommend";
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
    <div className="group cursor-pointer">
      <img
        onClick={() => movieDetails(movie.id)}
        className="h-72 w-full transistion duration-100 transform hover:scale-105"
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <div className="py-2">
        <p className="truncate">{movie.overview}</p>
        <h2 className="text-2xl mt-1 transistion-all duration-100 ease-in-out group-hover:font-bold">
          {movie.title || movie.original_name}
        </h2>

        <div className="flex items-center space-x-7 opacity-0 group-hover:opacity-100">
          <p>{movie.release_date || movie.first_air_date}</p>
          <p className="flex items-center space-x-1 ">
            <span>
              <RecommendIcon />
            </span>
            <span>{movie.vote_count}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
