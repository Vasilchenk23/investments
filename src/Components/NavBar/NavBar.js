import styled from 'styled-components';

const NavBars = styled.div`
display: flex;
flex-direction: column;
margin: 100px 0px 0px 20px;
width: 400px;
height: 700px;
color:  rgb(178, 176, 176);
cursor: pointer;

@media (max-width: 768px) {
  width: 100%;
  height: auto;
  margin: 20px;
}
`;

const NaavBar = () => {
    return ( 
    <>
        <NavBars>
            <div className="shoes">Shoes</div>
            <div className="bags">Bags</div>
            <div className="accessories">Accessories</div>
            <div className="support">Support</div>
        </NavBars>
    </>
     );
}
 
export default NaavBar;