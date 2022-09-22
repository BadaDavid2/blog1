import React from 'react'
import styled from 'styled-components'
import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import Blog from '../Blog.json'

const Home = () => {
  return (
    <>
     <Container>
        <Wrapper>
          <Cards>
          {
            Blog.map((el)=>(
              <Card key={el.id}>
                <Title>{el.title}</Title>
                <Flex>
                  <Image><img src={el.image} alt="" /></Image>
                  <Text>
                    {el.message.mini}
                  </Text>
                </Flex>
                <Bottom>
                  <Icon>
                    <img src={el.icon} alt="" />
                    <span>
                      <Author>{el.author}</Author>
                      <Time>4:53pm</Time>
                    </span>
                  </Icon>
                  <span className='icon'>
                    <Bookmark id='book'><AiFillDislike/></Bookmark>
                    <Like id='like'><AiFillLike/></Like>
                  </span>
                </Bottom>
            </Card>
            
            ))
          }
          </Cards>
        </Wrapper>
     </Container> 
    </>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    color: #2A2B2A;
    @media only screen and (min-width:300px) and (max-width:800px){
    height: fit-content;
  }
`
const Wrapper = styled.div`
    height: 100%;
    background-color: rgb(42, 43, 42);

`
const Cards = styled.div`
    overflow-x: auto !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 650px;
    @media only screen and (min-width:300px) and (max-width:800px){
    flex-wrap:wrap;
    overflow-x: hidden !important;
    justify-content: center;
    height: 100vh;
  }
`
const Card = styled.div`
  background-color: rgb(201, 201, 238);
  min-width: 780px;
  height: 420px;
  margin: 30px;
  padding: 30px;
  @media only screen and (min-width:300px) and (max-width:800px){
    min-width: 300px  !important;
    height: fit-content;
  }
  transition: all 0.1s;
  :hover{
    transform: scale(1.02);
    border-radius: 5px;
  }
`
const Image = styled.div`
  width: 400px;
  height: 280px;
  img{
    width: 100%;
    height: 100%;
  }
  @media only screen and (min-width:300px) and (max-width:800px){
    width: 280px  !important;
    height: 180px;
  }
`
const Text = styled.div`
  width: 360px;
  height: 280px;
  overflow-y: hidden;
  text-align: justify;
  
  :hover{
    overflow-y: auto;
  }
  @media only screen and (min-width:300px) and (max-width:800px){
    margin-top: 20px;
    width: 280px  !important;
    height: 180px;
    overflow-y: auto;
  }
`
const Title = styled.div`
  font-size: 42px;
  text-align: center;
  position: relative;
  font-weight: 400;
  text-align: center;
  font-style: oblique;
  margin: 10px auto;
  text-transform: capitalize;
  ::after, ::before{
    content: " ";
    position: absolute;
    width: 50px;
    height: 3px;
    top: 30px;
    border-radius: 0px 4px 4px 0px;
    background-color: #FF785A;
  }::after{
    left: 10rem;
    border-radius: 4px 0px 0px 4px;
    
  }
  ::before{
    border-radius: 0px 4px 4px 0px;
    right: 10rem;
  }
`
const Flex = styled.div`  
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (min-width:300px) and (max-width:800px){
    flex-wrap: wrap;
    justify-content: center;
  }
`
const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon{
    width: 100px;
    display: flex;
    justify-content: space-between;
  }
`
const Icon = styled.div`
  display: flex;
  /* width: 130px; */
  justify-content: space-between;
  align-items: center;
  img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }
`
const Author = styled.div`
  font-size: 17px;
  font-weight: 600;
  text-transform: capitalize;
  :hover{
    text-decoration: underline 0.1rem;
    cursor: pointer;
  }
`
const Time = styled.small``
const Like = styled.button`
  font-size: 25px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
  :focus{
    color: #FF785A;
  }
`
const Bookmark = styled.button`
  font-size: 25px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
    :focus{
    color: #A9A587 !important;
  }
`