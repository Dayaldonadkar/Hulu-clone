import React from "react";
import request from "../request";

const Nav = ({ setSelectedOption }) => {
  return (
    <nav>
      <div>
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3/${request.fetchTrending}`
            )
          }
        >
          Trending
        </h2>
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3/${request.fetchTopRated}`
            )
          }
        >
          Top Rated
        </h2>
        <h2
          onClick={setSelectedOption(
            `https://api.themoviedb.org/3/${request.fetchActionMovies}`
          )}
        >
          Action
        </h2>
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3/${request.fetchHorrorMovies}`
            )
          }
        >
          Horror
        </h2>
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3/${request.fetchMystery}`
            )
          }
        >
          Mystery
        </h2>
      </div>
    </nav>
  );
};

export default Nav;
