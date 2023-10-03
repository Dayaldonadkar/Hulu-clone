import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
import request from "../request";
import axios from "axios";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const Requests = await axios.get(selectedOption);
      setMovies(Requests.data?.results);
      return Requests;
    }

    fetchData();
  }, [selectedOption]);

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div>
            <VideoCard key={movie.id} movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
