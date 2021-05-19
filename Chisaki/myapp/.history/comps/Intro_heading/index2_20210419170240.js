import styles from '../../styles/Home.module.css'
import styled from 'styled-components';


const headingBox = styled.div`
font-family: 'Roboto, sans-serif';
text-align:left;
padding:10px,
`;
  
const Headstyle = styled.h1`
line-height: 0.5;
margin-bottom:20px;
color:#52A1C3;
`;

const subHeadStyle = styled.h3`
line-height:0.5;
margin-bottom:20px;
color:#52A1C3;
`;

const Intro_headingUI = ({
title="Heading",
subtext="subtitle",
}) => {
 
  return <headingBox>
    <Headstyle>{title}</Headstyle>
<subHeadStyle>{subtext}</subHeadStyle>
  </headingBox>
}


export default Intro_headingUI;