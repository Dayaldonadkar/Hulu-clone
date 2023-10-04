import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
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
    <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center 3xl:mx-20">
      {movies.map((movie, id) => {
        return (
          <div className="px-5 py-5 ">
            <VideoCard key={movie.id} movie={movie} />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
