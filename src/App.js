import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import { useState } from "react";
import request from "./request";
import Search from "./components/Search";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(
    `https://api.themoviedb.org/3/discover/movie?api_key=166b3b87d35b5238f944c71f3d835364&with_genres=10770`
  );

  return (
    <div>
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Search />
      <Results selectedOption={selectedOption} />
    </div>
  );
};

export default App;
