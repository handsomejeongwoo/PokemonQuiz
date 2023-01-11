import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 720px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 720px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const MainTitle = styled.p`
  color: #fff;
  @media screen and (max-width: 720px) {
    font-size: 5vw;
  }
`;

export const UpBall = styled.div`
  width: 100%;
  position: relative;
  height: 50%;
  background-color: red;
  border: 4px solid #000;
  box-sizing: border-box;
  border-bottom: none;
`;

export const CallOboxa = styled.div`
  position: absolute;
  z-index: 9999;
  top: 0;
  right: 0;
`;

export const DownBall = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 4px solid #000;
  box-sizing: border-box;
  position: relative;
`;

export const UpHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  flex-direction: column;
  font-size: 30px;
`;

export const Logo = styled.img`
  width: 400px;
  @media screen and (max-width: 720px) {
    width: 60vw;
  }
`;

export const WrapPoint = styled.div``;

export const Point = styled.p`
  font-size: 30px;
  color: #fff;
`;

export const PokemonWrap = styled.div`
  width: 200px;
  height: 200px;
  position: absolute;
  border-radius: 50%;
  border: 4px solid #000;
  box-sizing: border-box;
  background-color: #fff;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  @media screen and (max-width: 720px) {
    width: 30vw;
    height: 30vw;
  }
`;

export const PokemonImg = styled.img`
  width: 180px;
  height: 180px;
  @media screen and (max-width: 720px) {
    width: 30vw;
    height: 30vw;
  }
`;

export const DownBallContent = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const OboxaTitle = styled.button`
  font-size: 30px;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: red;
  }
  @media screen and (max-width: 720px) {
    font-size: 5vw;
  }
`;

export const PokemonNameInput = styled.input`
  text-align: center;
  width: 250px;
  height: 50px;
  font-size: 28px;
  border: none;
  border-bottom: 4px solid gray;
  outline: none;
  &:focus {
    outline: none;
    border-bottom: 4px solid red;
  }
  @media screen and (max-width: 720px) {
    width: 30vw;
    font-size: 4vw;
  }
`;

export const PokemonNameSubmitButton = styled.button`
  width: 400px;
  height: 90px;
  font-size: 25px;
  color: #fff;
  background-color: red;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 720px) {
    width: 60vw;
    height: 20vw;
  }
`;

export const PokemonMaster = styled.img`
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 0;
  @media screen and (max-width: 720px) {
    width: 55vw;
    height: 40vw;
  }
`;

export const HintWrqp = styled.div`
  width: 100%;
  position: relative;
  bottom: 0px;
`;

export const HintTitle = styled.div`
  width: 400px;
  height: 300px;
  position: absolute;
  left: 2%;
  z-index: 9999999999;
  border: 4px solid #000;
  border-radius: 20px;
  background-color: #fff;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 720px) {
    width: 60vw;
    height: 50vw;
  }
`;

export const ReturnMainBtn = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 25px;
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

export const PokemonInfoTitle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const PokemonInfo = styled.div`
  font-size: 25px;
  @media screen and (max-width: 720px) {
    font-size: 4vw;
  }
`;

export const PokemonHintContent = styled.div`
  position: absolute;
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media screen and (max-width: 720px) {
    width: 60vw;
    height: 50vw;
  }
`;
export const CloseButton = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  float: right;
  cursor: pointer;
  &:hover {
    color: red;
  }
  @media screen and (max-width: 720px) {
    font-size: 4vw;
  }
`;
export const PokemonHint = styled.p`
  font-size: 24px;
  @media screen and (max-width: 720px) {
    font-size: 4vw;
  }
`;
// export const CallPokemonDoctor = styled.div`
//   position: absolute;
//   z-index: 99999999;
//   top: 51%;
//   right: 2%;
// `;

// export const CallBtn = styled.button`
//   font-size: 20px;
//   background: none;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     color: red;
//   }
// `;
