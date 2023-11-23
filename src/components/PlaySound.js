import React, { useState } from 'react';
import useSound from 'use-sound';
import Water from '../Water.mp3';

const PlaySound = () => {
    const [playSound, {stop}] = useSound(Water);

    return (
        <div className="vibes">
            <button onMouseEnter={() => playSound()} onMouseLeave={() => stop()}>PLAY
            </button>
        </div>
    )
}



// const PlaySound = (
//     handleSongLoading,
//     handleSongPlaying,
//     handleSongFinishedPlaying
// ) => {
//     const [isPlaying, setIsPlaying] = useState(false);
    
//     return (
//         <div>
//             <button onClick={() => setIsPlaying(!isPlaying)}>{!isPlaying ? 'Play' : 'Stop'}</button>
//             <Sound
//                 url='./components/Water.mp3'
//                 playStatus={Sound.status.PLAYING}
//                 playFromPosition={300}
//                 onLoading={handleSongLoading}
//                 onPlaying={handleSongPlaying}
//                 onFinishedPlaying={handleSongFinishedPlaying}
//             />
//         </div>
//     );
// };

export default PlaySound