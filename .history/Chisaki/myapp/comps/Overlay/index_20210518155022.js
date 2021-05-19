import styled from 'styled-components'
import React from 'react'

const Cont = styled.div`
position:absolute;
top:150px;
left:180px;
width:175px;
height:40px;
text-align:center;
justify-content:center;
align-items:center;
border-radius:10px;
border: 2px solid #82DED9;
background-color:#F1EFEF;
visibility:${props=>props.visivility};
`;

const Text = styled.dvi`
width:90%;
position:relative;
text-align:left;
color:#5C5D5D;
margin:0px 10px;
font-size:12px;
font-family:Roboto, sans-serif;
`;

const Overlay = ({
visivility="hidden",
content="abc",
onClick=()=>{}  
})=> {
    return<Cont onClick={onClick} visivility={visivility} >
    <Text>{content}</Text>
    </Cont>
      
  }
  

export default Overlay;