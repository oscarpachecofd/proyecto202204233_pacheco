import React, {useEffect} from "react";
import styled from "styled-components";
import bnetzasko3 from "../../assets/bnetyzasko3.avif";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { collection, getDocs} from "firebase/firestore";
import db from '../../firebase/firebaseConfig';

const RegistrarUsuario = () => {


  return (
    
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>

    

  )
}


const Container = styled.div`
  background: #eefcff;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Wrapper = styled.div`
  background-image: url(${bnetzasko3});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
`;

export default RegistrarUsuario