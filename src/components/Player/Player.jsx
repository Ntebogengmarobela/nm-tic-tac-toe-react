import React from "react";
import { PlayerWrapper } from "./Player.style";
import Avatar, { genConfig } from "react-nice-avatar";
import { Subtitle, Text } from "../../styles/General.styled";
import { AvatarWrapper } from "./Player.style";

const Player = ({ player, isPlayerActive }) => {
  const config = genConfig()
 
  return (
    <PlayerWrapper>
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>
      <Subtitle>
        {player.name} ({player.choice.toUpperCase()})
      </Subtitle>
      <Subtitle>{player.score}</Subtitle>
    </PlayerWrapper>
  );
};

export default Player;
