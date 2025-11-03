import React, { useEffect, useRef, useState, useContext } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import { playList } from "../../utils/MusicUtils/Playlist";
import { randomizeIndex } from "../../utils/MusicUtils";
import { PlayIcon, PauseIcon, NextIcon } from "./MusicPlayer.styled";
import { SfxContext } from "../../contexts/SfxContext";
import { Text } from "../../styles/General.styled";

function MusicPlayer() {
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  console.log(playList[currentSong].split("/")[8]);
  const displaySong = playList[currentSong].split("/")[8];

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      if (playerRef.current?.volume) playerRef.current.volume = 0.1;

      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    clickSfx();
    setIsPlaying(true);
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
    });

    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
  };
  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(false);
          }}
          onMouseEnter={() => hoverSfx()}
        />
      ) : (
        <PlayIcon
          onClick={() => {
            clickSfx();
            setIsPlaying(true);
          }}
          onMouseEnter={() => hoverSfx()}
        />
      )}
      <NextIcon onClick={shuffleHandler} onMouseEnter={() => hoverSfx()} />

      <audio
        ref={playerRef}
        src={playList[currentSong]}
        onEnded={shuffleHandler}
      ></audio>
      <Text>{displaySong}</Text>
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
