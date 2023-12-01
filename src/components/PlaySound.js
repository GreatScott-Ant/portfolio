import React, { useState } from 'react';
import useSound from 'use-sound';
import Water from '../Water.mp3';
import pressPlay from '../play4.svg';
import './PlaySound.css';

const PlaySound = () => {
  const [playSound, { stop }] = useSound(Water);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="vibes">
      <button
        className={`pulse-button ${isHovered ? 'pulse' : ''}`}
        style={{
          outline: 'none',
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
        onMouseEnter={() => {
          playSound();
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          stop();
          setIsHovered(false);
        }}
      >
        <img alt="" width={30} height={30} src={pressPlay} />
      </button>
    </div>
  );
};

export default PlaySound;