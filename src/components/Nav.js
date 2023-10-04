import React from "react";
import request from "../request";

const baseUrl = `https://api.themoviedb.org/3`;

const Nav = ({ setSelectedOption }) => {
  return (
    <nav>
      <div>
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3/trending/all/week?api_key=166b3b87d35b5238f944c71f3d835364&language=en-US`
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
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3//movie/top_rated?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=28`
            )
          }
        >
          Action
        </h2>
        <h2
          onClick={() =>
            setSelectedOption(
              `https://api.themoviedb.org/3/movie/top_rated?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=27`
            )
          }
        >
          Horror
        </h2>

        <h2
          onClick={() =>
            setSelectedOption(
              `${baseUrl}/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=10749`
            )
          }
        >
          Romance
        </h2>

        <h2
          onClick={() =>
            setSelectedOption(
              `${baseUrl}/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=9648`
            )
          }
        >
          Mystery
        </h2>

        <h2
          onClick={() =>
            setSelectedOption(
              `${baseUrl}/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=878`
            )
          }
        >
          fetchSciFi
        </h2>

        <h2
          onClick={() =>
            setSelectedOption(
              `${baseUrl}/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=37`
            )
          }
        >
          Western
        </h2>
        <h2
          onClick={() =>
            setSelectedOption(
              `${baseUrl}/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=16`
            )
          }
        >
          Animation
        </h2>
        <h2
          onClick={() =>
            setSelectedOption(
              `${baseUrl}/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=10770`
            )
          }
        >
          TV
        </h2>
      </div>
    </nav>
  );
};

export default Nav;
