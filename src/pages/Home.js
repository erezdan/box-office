import React, { useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { apiGet } from '../misc/config';

// tvmaze.com

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onInputChange = en => {
    setInput(en.target.value);
  };

  const search = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
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
      return (
        <div>
          {results.map(item => {
            return <div key={item.show.id}>{item.show.name}</div>;
          })}
        </div>
      );
    }
    return null;
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={onInputChange}
        onKeyDown={onKeyDown}
        val={input}
      />
      <button type="button" onClick={onButtonClick}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
