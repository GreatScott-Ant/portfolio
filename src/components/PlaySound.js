import React, { useState } from 'react';
import useSound from 'use-sound';
import pressPlay from '../play4.svg';
import './PlaySound.css';

const playlist = [
  { name: 'New God Bounce', file: require('../New God Bounce.mp3') },
  { name: 'Water', file: require('../Water.mp3') },
  // { name: 'Song Name', file: require('../song.mp3') },
];

const PlaySound = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [playSound, { stop }] = useSound(playlist[currentTrack].file);
  const [isHovered, setIsHovered] = useState(false);

  const playNextTrack = () => {
    stop();
    setCurrentTrack((prevTrack) => (prevTrack + 1) % playlist.length);
  };

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
        onClick={playNextTrack}
      >
        <img alt="" width={30} height={30} src={pressPlay} />
      </button>
      <p>{playlist[currentTrack].name}</p>
    </div>
  );
};

export default PlaySound;
