

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import buty from './img/buty.png';
import Instagram from './Components/Instagram/Instagram';
import FaceBook from './Components/FaceBook/FaceBook';
import GitHub from './Components/GitHub/GitHub';
import addToCard from './img/add-to-card.png';
import play from './img/play.png';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';





const MainImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -600px;
  margin-left: -150px;
  flex: 1 1 auto;
  @media (max-width: 800px) {
    margin-top: -200px;
    margin-left: 40px;
    
  }
`;

const Page = styled.div`
display: flex;
justify-content: center;
margin: 0px 0px 0px 20px;
color:  rgb(178, 176, 176);
`
const Footer = styled.footer`
display:  flex;
justify-content: space-between;
margin: 100px 70px 0px 120px;
cursor: pointer;
`

const MainButton1 = styled.div`
width: 190px;
height: 70px;
border-radius: 10px;
background-color: black;
border: none;
color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 0px 0px 450px;
cursor: pointer;
@media screen and (max-width: 992px) {
  margin: 10px 20px;
}

`
const MainButton2 = styled.div`
width: 190px;
height: 70px;
border-radius: 10px;
background-color: black;
border: none;
color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 400px;
cursor: pointer;
@media screen and (max-width: 992px) {
  margin: 10px 20px;
}
`

const MainButtonsH1 =styled.h1`
font-size: 15px;
`

function App() {
  return (
    <div className='wrapper'>
      <Header></Header>
      <div className="block1">
        <h1 className="logo">MV</h1>
        <NavBar></NavBar>
      </div>
      <MainImg>
    <img src={buty} alt='sport_buty'/>
      </MainImg>
      <Page>
        <p>Pump up your game and style.<br/> With Max Air cushioning in the heel, these lightweight<br/> and stable shoes let you take off with a firm punch and land comfortably.<br/> In addition, rubber covers the area on the sides for added durability and stability.</p>
      </Page>
      <div className='mainButtons'>
        <MainButton1>
          <MainButtonsH1><img src={addToCard} alt='add-to-card'/>Add To Card</MainButtonsH1>
        </MainButton1>
        <MainButton2>
          <MainButtonsH1><img src={play} alt='video'/>Watch Info</MainButtonsH1>
        </MainButton2>
      </div>
      <Footer>
        <div className="gitHub">
          <GitHub></GitHub>
        </div>
        <div className="Insta">
          <Instagram></Instagram>
        </div>
        <div className="Facebook">
          <FaceBook></FaceBook>
        </div>
      </Footer>
      </div>
  );
}

export default App;
