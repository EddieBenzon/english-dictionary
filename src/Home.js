import React from "react";
import SearchForm from "./SearchForm";
import WordDetails from "./WordDetails";
import Synonyms from "./Synonyms";

const Home = () => {
  return (
    <div className="page-main">
      <SearchForm />
      <div className="result-container">
        <WordDetails />
        <Synonyms />
      </div>
    </div>
  );
};

export default Home;
