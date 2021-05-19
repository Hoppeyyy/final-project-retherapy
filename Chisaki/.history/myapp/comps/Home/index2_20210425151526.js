import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import ButtonUI from '../Button/index2'
import {useRouter} from 'next/router' 

const CardCont = styled.div`
background:#82DED9;
width:377px;
height:667px;
text-align:center;
justify-content:center;

`;
  
const Cont = styled.div`
background:#82DED9;
width:377px;
text-align:center;
font-family:Roboto, sans-serif;
justify-content:center;
align-items:center;
position:absolute;
top:60px;
`;

const C1 = styled.div`
justify-content:center;
align-items:center;
background:#FFFFFF;
opacity:0.15;
border-radius: 50%;
width: 377px;
height: 377px;
position:absolute;
`;

const C2 = styled.div`
justify-content:center;
align-items:center;
background:#FFFFFF;
opacity:0.15;
border-radius: 50%;
width: 340px;
height: 340px;
position:relative;
left:20px;
top:10px;
`;

const C3 = styled.div`
margin:0px;
justify-content:center;
margin-bottom:5px;
margin-top:5px;
font-size:12px;
position:relative;
`;

const Logo = styled.img`
position:relative;
`;

const Text = styled.p`
color:#FFFFFF;
position:relative;
`;

const HomeUI = ({
ps="Check your mental condition & Take  care your mental health",



}) => {
  const router = useRouter();
  return <CardCont>
  <Cont>
    <C1></C1>
    <C2></C2>
    <C3></C3>
    <Logo src="/apps_pic/logo.png"></Logo>
    <Text>{ps}</Text>
    <div className={styles.buttonBox}>
    <ButtonUI 
    title="Start"
    subtext=""
    routeTo='/intro'
    bgcolor="#52A1C3"
    styles={{
      position:"relative",
    }}
    />
    </div>
  </Cont>
  </CardCont>
}


export default HomeUI;