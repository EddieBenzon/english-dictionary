import React from "react";
import { useGlobalContext } from "./context";

const WordDetails = () => {
  const { searchTerm, definitions, examples, faultySearch } =
    useGlobalContext();
  if (definitions.length < 1 || faultySearch) {
    return <h4 className="get-started">Type a word in and get started!</h4>;
  }

  return (
    <section className="details-main">
      {!faultySearch && <h3>{searchTerm}</h3>}
      {!faultySearch && <h4>Definitions:</h4>}
      {definitions.map((item, index) => {
        return <p key={index}>{`- ${item}`}</p>;
      })}
      {examples.length > 0 && <h4>Examples</h4>}
      {examples.map((item, index) => {
        if (item !== undefined) {
          return <p key={index}>{`- "${item}"`}</p>;
        }
      })}
    </section>
  );
};

export default WordDetails;
