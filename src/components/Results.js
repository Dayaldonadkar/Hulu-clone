import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
import request from "../request";
import axios from "axios";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const Requests = await axios.get(
        selectedOption
        // `https://api.themoviedb.org/3/${request.fetchTrending}`
      );
      setMovies(Requests.data?.results);
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div>
            <VideoCard movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
