import React, { useContext, useEffect, useState } from "react";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [definitions, setDefinitions] = useState([]);
  const [examples, setExamples] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [faultySearch, setFaultySearch] = useState(false);
  const findWord = async (word) => {
    try {
      const res = await fetch(`${url}${word}`);
      const data = await res.json();
      if (data.title === "No Definitions Found") {
        setFaultySearch(true);
        return;
      }
      const destructure = data.map((item) => {
        return item.meanings;
      });
      const destructureCut = [].concat(...destructure);
      const newArray = destructureCut.map((item) => {
        return item.definitions;
      });
      const newCut = [].concat(...newArray);
      const definitionsArray = newCut.map((item) => {
        return item.definition;
      });
      const examplesArray = newCut.map((item) => {
        return item.example;
      });
      const examplesFiltered = examplesArray.filter((item) => {
        return item !== undefined;
      });
      examplesFiltered.splice(3, 50);
      const synonymsArray = newCut.map((item) => {
        return item.synonyms;
      });
      const synonymsSpread = [].concat(...synonymsArray);
      synonymsSpread.splice(12, 100);
      setExamples(examplesFiltered);
      setDefinitions(definitionsArray);
      setSynonyms(synonymsSpread);
      setFaultySearch(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    findWord(searchTerm);
  }, [searchTerm]);
  return (
    <AppContext.Provider
      value={{
        findWord,
        setSearchTerm,
        searchTerm,
        definitions,
        examples,
        synonyms,
        faultySearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
