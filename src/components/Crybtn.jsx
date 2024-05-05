import React, { useRef } from 'react';

export default function SoundButton(props) {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  };

  return (
    <>
      <button onClick={playSound}>Play Cry</button>
      <audio ref={audioRef} src={props.cry} preload="auto" />
    </>
  );
}