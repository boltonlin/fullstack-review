import React, { useState } from 'react';

const Search = ({ onSearch }) => {

  const[term, setTerm] = useState('')

  const onChange = (event) => {
    setTerm(event.target.value);
  }

  const search = (event) => {
    event.preventDefault();
    onSearch(term);
    setTerm('');
  }

  return (
    <form className="search-form" onSubmit={search}>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={term} onChange={onChange}/>
      <button onClick={search}> Add Repos </button>
    </form>
  );
}

export default Search;