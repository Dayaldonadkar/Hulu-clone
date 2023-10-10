import React, { useState } from "react";
import VideoCard from "./VideoCard";
import { useEffect } from "react";
import axios from "axios";

const Results = ({ selectedOption }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const Requests = await axios.get(selectedOption);
      setMovies(Requests.data?.results);
      return Requests;
    }
    async function fetchQuery() {
      const req = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=166b3b87d35b5238f944c71f3d835364`
      );
      // console.log("req", req);
      setQuery(req.data?.results);
      console.log((req.data?.results).length, "length");
    }

    fetchData();
    fetchQuery();
  }, [selectedOption, search]);

  return (
    <div>
      <div className="flex justify-center pt-14">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      {/* {query.length > 1 ? (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
          {query.map((movie) => {
            const { id } = movie;
            return (
              <div className="px-5 py-5">
                <VideoCard key={movie.id} movie={movie} />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )} */}

      {query.length === 0 && search.length === 0 ? (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
          {movies.map((movie, id) => {
            return (
              <div className="px-5 py-5">
                <VideoCard key={movie.id} movie={movie} />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}

      {query.length === 0 && search.length > 0 ? (
        "no movies found"
      ) : (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3">
          {query.map((movie) => {
            const { id } = movie;
            return (
              <div className="px-5 py-5">
                <VideoCard key={movie.id} movie={movie} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Results;
