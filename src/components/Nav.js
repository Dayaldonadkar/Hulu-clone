import React from "react";
import request from "../request";

const Nav = ({ setSelectedOption }) => {
  return (
    <nav>
      <div>
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=16`
            )
          }
        >
          Trending
        </h2>
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3//movie/top_rated?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=878`
            )
          }
        >
          Top Rated
        </h2>
        {/* <h2
          onClick={setSelectedOption(
            `https://api.themoviedb.org/3//movie/top_rated?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=28`
          )}
        >
          Action
        </h2> */}
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3//movie/top_rated?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=27`
            )
          }
        >
          Horror
        </h2>
      </div>
    </nav>
  );
};

export default Nav;
