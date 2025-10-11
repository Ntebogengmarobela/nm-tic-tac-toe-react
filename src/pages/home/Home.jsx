import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";



const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Title>TicTacToe</Title>
      <Subtitle>Play with your friends, higher score wins!</Subtitle>
      <Button onClick={()=> navigate("/game-on")}>Play Now</Button>
    </Container>
  );
};

export default Home;
