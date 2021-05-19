import styles from '../../styles/Home.module.css'
import React from 'react';
import styled from 'styled-components';

const Cont= styled.div`
`;
const PsStyle = styled.p`
    color:#52A1C3;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    font-size:10px;
    width:80%;
    margin-left:20px;
    `;

const Strong = styled.strong`
font-weight:bold;
margin:0;


`;
    
   // a:hoverBackgroundColor: "yellow";
      
const PsNoteUI = ({

})=>{
    return (
        <Cont>
            <PsStyle>
                <Strong>Resources:</Strong><br></br>
                 <a href="https://www.achn.net/about-access/whats-new/health-resources/3-most-common-mental-health-disorders-in-america/">https://www.achn.net/about-access/whats-new/health-resources/3-most-common-mental-health-disorders-in-america/</a></PsStyle>
          <PsStyle>
            Please feel free to contact us: 
            <Strong> <a href="mailto: retheraph_app@gmail.com">  retheraph_app@gmail.com </a></Strong>
          </PsStyle>
          </Cont>
        
      )
}  
export default PsNoteUI;
