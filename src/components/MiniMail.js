import React from 'react';
import Vector from '../Vector.svg';

const MiniMail = () => {
  return (
    <a href="mailto:ant.scott227@gmail.com">
      <button className="bounce-button" style={{ outline: 'none', background: 'transparent', border: 'none', padding: 0 }}>
        <img
          alt=""
          width={"35"}
          height={"35"}
          src={Vector}  
        />
      </button>
    </a>
  );
};

export default MiniMail