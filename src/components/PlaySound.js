import React, { useState } from 'react';
import Sound from 'react-sound'; 
import Water from './components/Water.mp3'


const PlaySound = (
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) => {
    const [isPlaying, setIsPlaying] = useState(false);
    
    return (
        <div>
            <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}</button>
            <Sound
                url='./components/Water.mp3'
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={handleSongLoading}
                onPlaying={handleSongPlaying}
                onFinishedPlaying={handleSongFinishedPlaying}
            />
        </div>
    );
};

export default PlaySound