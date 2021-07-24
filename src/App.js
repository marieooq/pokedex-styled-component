import React, { useState } from 'react';

//components
import Layout from './components/Layout';
import CardContainer from './components/CardContainer';
import SearchForm from './components/SearchForm';
import SearchBar from './components/SearchBar';
import Selector from './components/Selector';
import FilterContainer from './components/FilterContainer';

//JSON data
import pokedexJSON from './pokedex';

const App = () => {
  //state
  const [searchWords, setSearchWords] = useState(''); //''/ search words
  const [type, setType] = useState('All Types');

  //generate type selector
  const generateTypeSelectList = (list) => {
    let originalArray = ['All Types'];

    list.forEach((val) => {
      if (val.type) {
        val.type.forEach((type) => originalArray.push(type));
      }
    });

    //remove duplicate values, if any, and extract only unique values.
    const resultArray = Array.from(new Set(originalArray));

    return resultArray;
  };

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
  };

  //filter the list by type
  const filterByType = (lists, type) => {
    let result;

    if (type === 'All Types') {
      result = lists;
    } else {
      result = lists.filter((list) => {
        return list.type.includes(type);
      });
    }

    return result;
  };

  //set the words user has typed in the search input
  const handleSearch = (e) => {
    setSearchWords(e.target.value);
  };

  return (
    <div className="App">
      <Layout>
        <FilterContainer>
          <SearchBar />
          <SearchForm
            type="text"
            placeholder="Search By Name"
            handleChange={handleSearch}
          />
          <Selector
            value={type}
            setValue={setType}
            list={generateTypeSelectList(pokedexJSON)}
          />
        </FilterContainer>
        <CardContainer
          lists={filterByType(filterByWord(pokedexJSON, searchWords), type)}
        />
      </Layout>
    </div>
  );
};

export default App;
