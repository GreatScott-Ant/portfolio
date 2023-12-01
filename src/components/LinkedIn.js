import React from 'react';
import linkin from "../linkedin.svg"

const LinkedInButton = () => {
  const linkedinURL = 'https://www.linkedin.com/in/anthony-holt-jr/';

  return (
    <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
      <button style={{ outline: 'none', background: 'transparent', border: 'none', padding: 0 }}>
        <img
        alt=""
        width={"45"}
        height={"45"}
        src={linkin}
        />
      </button>
    </a>
  );
};

export default LinkedInButton;