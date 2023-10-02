import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Results from "./components/Results";
import { useState } from "react";
import request from "./request";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(
    `https://api.themoviedb.org/3/${request.fetchTrending}`
  );
  return (
    <div>
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
};

export default App;
