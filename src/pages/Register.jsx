import React from 'react'
import styled from 'styled-components';
import mobile from '../responsive';

const Container=styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;  
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper=styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
 ${mobile({width:'75%',height:"70%",padding:"10px"})}

  
`;
const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;
 ${mobile({fontSize: "20px",textAlign:"center"})}

`;
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
`;
const Input=styled.input`
    flex: 1;
    min-width:40% ;
    margin: 20px 10px 0px 0px;
    padding: 10px;
 ${mobile({minWidth:"45%",height:"10px",margin:"8px 0px 0px 0px"})}
    
`;
const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 0px;
 ${mobile({margin:"15px 0px",fontSize:"10.5px"})}

`;
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    cursor: pointer;
    background-color: teal;
    color: white;
 ${mobile({width:"100%",margin:"0 10px"})}


`;

export default function Register() {
  return (
    <Container>
    <Wrapper>
      <Title>SIGN IN</Title>
      <Form>
        <Input placeholder="First name" />
        <Input placeholder="Last name" />
        <Input placeholder="username" />
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Input placeholder="confirm password" />
        <Agreement>
          By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
        </Agreement>


        <Button>CREATE ACCOUNT</Button>
      </Form>
    </Wrapper>
  </Container>
  )
}
