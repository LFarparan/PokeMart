import React, { useRef } from 'react';
import soundIcon from '../assets/volume-high.svg'

export default function SoundButton(props) {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
      audioRef.current.play();
    }
  };

  return (
    <>
      <button className='cardbtn soundbtn' onClick={playSound}>
        <img src={soundIcon} alt='sound' width='15px'/>
        Play Cry
      </button>
      <audio ref={audioRef} src={props.cry} preload="auto" />
    </>
  );
}