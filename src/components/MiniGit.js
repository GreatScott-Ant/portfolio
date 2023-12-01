import React from 'react';
import github from '../github.svg'

const MiniGit = () => {
  const gitHubURL = 'https://github.com/GreatScott-Ant';

  return (
    <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
      <button className="bounce-button" style={{ outline: 'none', background: 'transparent', border: 'none', padding: 0 }}>
        <img
        alt=""
        width={"32"}
        height={"32"}
        src={github}
        />
      </button>
    </a>
  );
};

export default MiniGit;