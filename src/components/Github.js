import React from 'react';
import github from '../github.svg'

const GitHubButton = () => {
  const gitHubURL = 'https://github.com/GreatScott-Ant';

  return (
    <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
      <button style={{ outline: 'none', background: 'transparent', border: 'none', padding: 0 }}>
        <img
        alt=""
        width={"45"}
        height={"45"}
        src={github}
        />
      </button>
    </a>
  );
};

export default GitHubButton;