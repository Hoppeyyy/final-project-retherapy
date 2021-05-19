import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';

const CardCont = styled.div`
  width:377px;
  display:flex;
  flex-direction:column;
  color:#52A1C3;
`;
  

const UpperBox = styled.div`
  background-color:#CDF0EE;
  height:30px;
`;
  
const Heading = styled.h3`
  justify-content:center;
 margin-top:-5px;
  margin-left:20px;
  color:#52A1C3;
  font-family:Saira Semi Condensed, sans-serif;
  text-align:left;
`;

const LowerBox = styled.div`
  background-color:#FFFFFF;
  text-align:left;
`;

const Text = styled.p`
  width:80%;
  margin-bottom:5px;
  margin-top:5px;
  margin-left:20px;
  justify-content:center;
  color:#52A1C3;
  font-family:Saira Semi Condensed, sans-serif;
  line-hight:30px;
  
`;

const ContentUI = ({
heading="1:Anxiety disorder",
content="Symptoms can include excessive worrying, feeling agitated, restlessness, fatigue, tense muscles, difficulty sleeping, and panic attacks.",

}) => {

  return <CardCont >
    <UpperBox>
      <Heading>{heading}</Heading>
    </UpperBox>
    <LowerBox>
      <Text>{content}</Text>
    </LowerBox>
  </CardCont>
}


export default ContentUI;