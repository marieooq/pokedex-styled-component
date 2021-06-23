import React, { useState } from "react";

//components
import Layout from "./components/Layout";
import CardContainer from "./components/CardContainer";
import SearchForm from "./components/SearchForm";

//JSON data
import pokedexJSON from "./pokedex";

const App = () => {
  //state
  const [searchWords, setSearchWords] = useState(""); //''/ search words

  //set the words user has typed in the search input
  const handleSearch = (e) => {
    setSearchWords(e.target.value);
  };

  return (
    <div className="App">
      <Layout>
        <SearchForm
          type="text"
          placeholder="Search By Name"
          handleChange={handleSearch}
        />
        <CardContainer lists={pokedexJSON} />
      </Layout>
    </div>
  );
}

export default App;
