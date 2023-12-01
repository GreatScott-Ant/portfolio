import React from 'react';
import useSound from 'use-sound';
import Water from '../Water.mp3';
import pressPlay from '../play4.svg';

const PlaySound = () => {
  const [playSound, { stop }] = useSound(Water);

  return (
    <div className="vibes">
      <button
        style={{
          outline: 'none',
          background: 'transparent',
          border: 'none',
          padding: 0,
          cursor: 'pointer',
        }}
        onMouseEnter={() => playSound()}
        onMouseLeave={() => stop()}
      >
        <img alt="" width={30} height={30} src={pressPlay} />
      </button>
    </div>
  );
};

export default PlaySound;