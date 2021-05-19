import styles from '../../styles/Home.module.css'
import React from 'react'
import styled from 'styled-components';
import {useRouter} from 'next/router' 

const Cont = styled.div`
background-color:#000000;
width:377px;
height:43px;
display:flex;
flex-direction:row;
`;

const HomeIcon = styled.img`
width:24px;
height:24px;
text-align:left;
margin-left:5px;
margin-top:10px;

`;
const Logo = styled.img`
width:115px;
height:25px;
position:absolute;
left:130px;
top:13px;
`;
const Menu = styled.img`

`;
const TopBar= ({

})=>{
  const router = useRouter();
  return<Cont>
<HomeIcon 
src="/image/home.png" 
/>
<Logo 
src="/apps_pic/logo.png" />
<Menu 
src="/icons"
/>
  </Cont>
}
   
  export default TopBar;


