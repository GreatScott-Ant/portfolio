import React, { useState } from 'react';
import useSound from 'use-sound';
import Water from '../Water.mp3';
import pressPlay from "../play2.png";

const PlaySound = () => {
    const [playSound, {stop}] = useSound(Water);

    return (
        <div className="vibes">
            <button onMouseEnter={() => playSound()} onMouseLeave={() => stop()}>
                <img
                alt=""
                width={"30"}
                height={"30"}
                src={pressPlay}
                />
            </button>
        </div>
    )
}

export default PlaySound