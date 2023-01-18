import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

const App = ({
  fetcherProp
}) => {

  const [repos, setRepos] = useState([]);

  const search = (username) => {
    fetcherProp.addReposByUser(username,
      fetcherProp.getTopRepos.bind(fetcherProp, 25,
        (results) => {
          setRepos(results);
        }
      )
    );
  }

  useEffect(() => {
    fetcherProp.getTopRepos(25, (results) => {
      setRepos(results);
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

const fetcher = require('./fetcher');

ReactDOM.render(<App fetcherProp={fetcher} />, document.getElementById('app'));