import React from "react";
import { useGlobalContext } from "./context";

const Synonyms = () => {
  const { synonyms, faultySearch } = useGlobalContext();
  if (synonyms.length < 1) {
    return null;
  }
  return (
    <>
      {!faultySearch && (
        <div className="synonyms-container">
          <h4>Some synonyms</h4>
          {synonyms.map((item, index) => {
            return (
              <p className="synonym" key={index}>
                {`- ${item}`}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Synonyms;
