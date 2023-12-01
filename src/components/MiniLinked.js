import React from 'react';
import linkin from "../linkedin.svg"

const MiniLinked = () => {
  const linkedinURL = 'https://www.linkedin.com/in/anthony-holt-jr/';

  return (
    <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
      <button className="bounce-button" style={{ outline: 'none', background: 'transparent', border: 'none', padding: 0 }}>
        <img
        alt=""
        width={"35"}
        height={"35"}
        src={linkin}
        />
      </button>
    </a>
  );
};

export default MiniLinked;