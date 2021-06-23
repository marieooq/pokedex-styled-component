import React, { useState } from "react";

//components
import Layout from "./components/Layout";
import CardContainer from "./components/CardContainer";
import SearchForm from "./components/SearchForm";
import Selector from "./components/Selector";
import FilterContainer from "./components/FilterContainer";

//JSON data
import pokedexJSON from "./pokedex";

const App = () => {
  const dummyTypeList = ['A', 'B', 'C'];

  //state
  const [searchWords, setSearchWords] = useState(""); //''/ search words
  const [type, setType] = useState("");

  //filter the list by words
  const filterByWord = (lists, words) => {
    const result = lists.filter((list) => {
      const name = list.name.english.toLowerCase();

      if (words) {
        return name.includes(words.toLowerCase());
      } else {
        return true;
      }
    });

    return result;
  }
 
  //set the words user has typed in the search input
  const handleSearch = (e) => {
    setSearchWords(e.target.value);
  };

  return (
    <div className="App">
      <Layout>
        <FilterContainer>
          <SearchForm
            type="text"
            placeholder="Search By Name"
            handleChange={handleSearch}
          />
          <Selector value={type} setValue={setType} list={dummyTypeList} />
        </FilterContainer>
        <CardContainer lists={filterByWord(pokedexJSON, searchWords)} />
      </Layout>
    </div>
  );
}

export default App;
