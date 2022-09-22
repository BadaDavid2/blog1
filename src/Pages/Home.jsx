import React from 'react'
import styled from 'styled-components'
const Home = () => {
  return (
    <>
     <Container>
        <Wrapper>
          <Cards>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card> 
          </Cards>
        </Wrapper>
     </Container> 
    </>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
const Wrapper = styled.div`
    height: 100%;
    background-color: rgb(42, 43, 42);
    /* flex-wrap: wrap; */

`
const Cards = styled.div`
    overflow-x: scroll;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 600px;

`
const Card = styled.div`
  background-color: rgb(201, 201, 238);
  min-width: 800px;
  height: 500px;
  margin: 30px;
  @media only screen and (min-width:300px) and (max-width:600px){
    min-width: 500px  !important;
    height: 400px;
  }
`