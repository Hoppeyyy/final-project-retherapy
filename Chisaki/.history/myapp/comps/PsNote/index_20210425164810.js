import styles from '../../styles/Home.module.css'
import React from 'react';
import styled from 'styled-components';

const Cont= styled.div`
`;
const PsStyle = styled.p`
    color:#52A1C3;
    font-family: 'Saira Semi Condensed', sans-serif;
    text-align:left;
    font-size:16px;
    width:377px;
    `;

const email = styled.p`
fontWeight:bold",
`;
    
   // a:hoverBackgroundColor: "yellow";
      
const PsNoteUI = ({

})=>{
    return (
        <Cont>
          <PsStyle>
              Please feel free to contact 
              <a href="mailto:retheraph.more@retheraph.com"> retheraph.more@retheraph.com </a>for any inquiries 
          </PsStyle>
          </Cont>
        
      )
}  
export default PsNoteUI;