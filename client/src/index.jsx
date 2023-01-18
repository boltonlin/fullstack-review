import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import fetcher from './fetcher';

const App = ({
  fetcher
}) => {

  const [repos, setRepos] = useState([]);

  const search = (username) => {
    fetcher.addReposByUser(username,
      fetcher.getTopRepos.bind(fetcher, 25,
        (results) => {
          setRepos(results);
        }
      ));
  }

  useEffect(() => {
    fetcher.getTopRepos(25, (results) => {
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

ReactDOM.render(<App fetcher={fetcher} />, document.getElementById('app'));