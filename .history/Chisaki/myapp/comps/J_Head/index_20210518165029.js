import styles from '../../styles/Home.module.css';
import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
width:377px;
`;
const Title = styled.h2`
color: #52A1C3;
text-align: left;
margin-bottom:0;
margin-left:16px;
font-family:Roboto, sans-serif;
`;

const Subhead =styled.div`
  color: #52A1C3;
  margin-bottom:20px;
  margin-top:5px;
  margin-left:20px;
  font-size:16px;
  font-family:Roboto, sans-serif;
`;

const J_Head =({
  title="",
  subhead="",
})=> {
    return (
    <Cont>
      <Title>{title}</Title>
      <Subhead>{subhead}</Subhead>
    </Cont>   
    )
      
}  
export default J_Head;
