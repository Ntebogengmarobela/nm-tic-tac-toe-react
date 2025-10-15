import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { SfxContext } from "../../contexts/SfxContext";

const Home = () => {
  const navigate = useNavigate();
  const { hoverSfx, clickSfx } = useContext(SfxContext);
  return (
    <Container columnBased>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate("/game-on");
        }}
       
        onMouseEnter={() => hoverSfx()}
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
