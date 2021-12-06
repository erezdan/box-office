import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';

// tvmaze.com

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');
  const isShowsSearch = searchOption === 'shows';

  const onInputChange = ev => {
    setInput(ev.target.value);
  };

  const search = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then(result => {
      setResults(result);
    });
  };

  const onButtonClick = () => {
    search(input);
  };
  const onKeyDown = ev => {
    if (ev.keyCode === 13) search(input);
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  const onRadioChange = ev => {
    setSearchOption(ev.target.value);
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        placeholder="Search for somthing"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        val={input}
      />

      <div>
        <label htmlFor="shows-search">
          Shows
          <input
            id="shows-search"
            type="radio"
            value="shows"
            onChange={onRadioChange}
            checked={isShowsSearch}
          />
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            id="actors-search"
            type="radio"
            value="people"
            onChange={onRadioChange}
            checked={!isShowsSearch}
          />
        </label>
      </div>

      <button type="button" onClick={onButtonClick}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
