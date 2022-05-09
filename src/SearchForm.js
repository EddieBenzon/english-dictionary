import React, { useRef } from "react";
import { useGlobalContext } from "./context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!refContainer.current.value) return;
    setSearchTerm(refContainer.current.value);
  };

  return (
    <main className="welcome-main">
      <section className="welcome-title">
        Welcome to the English Dictionary App!
      </section>
      <h3>Expand your vocabulary or just brush up on your knowledge</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        <input type="text" placeholder="example: stoic" ref={refContainer} />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>
    </main>
  );
};

export default SearchForm;
