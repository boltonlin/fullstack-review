import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({
  repos
}) => (
  <div>
    <h4> Repo List Component </h4>
    <p>There are {repos.length} repos.</p>
    <ul className="repo-list">
      {repos.map((repo) => (
        <Repo repo={repo} key={repo.id}/>
      ))}
    </ul>
  </div>
)

export default RepoList;