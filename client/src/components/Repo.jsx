import React from 'react';

const Repo = ({
  repo
}) => (
  <li className="repo">
    <a href={repo.ownerUrl}><img
      className="owner-avatar"
      src={repo.ownerAvatar}></img></a>
    <div className="repo-info">
      <a
        href={repo.url}
        className="repo-name">
        <h2>{repo.name}</h2>
      </a>
      <p className="description">{repo.description}</p>
      <p className="score">Score: {repo.score}</p>
    </div>
  </li>
);

export default Repo;