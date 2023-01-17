import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = () => {

  const [repos, setRepos] = useState([]);

  const search = (term) => {
    console.log(`${term} was searched`);
  }

  useEffect(() => {
    $.ajax({
      method: "POST",
      url: "http://localhost:1128/repos",
      data: JSON.stringify({ 'hello': 'world' }),
      contentType: "application/json; charset=utf-8"
    }).done((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div>
      <h1>Github Fetcher</h1>
      <RepoList repos={repos}/>
      <Search onSearch={search}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));