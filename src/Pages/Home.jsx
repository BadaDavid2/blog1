import React from 'react'
import styled from 'styled-components'
import img1 from '../Img/1.jpg'
import icon1 from '../Img/4.jpg'
const Home = () => {
  return (
    <>
     <Container>
        <Wrapper>
          <Cards>
            <Card>
                <Title>First Title</Title>
                <Flex>
                  <Image><img src={img1} alt="" /></Image>
                  <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae a aut ut culpa, provident aspernatur! Voluptates placeat illum harum sit ex veniam, labore mollitia at dolores asperiores laborum. Autem, quos. <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita necessitatibus molestias animi. Repudiandae deleniti sequi velit corporis natus. Dolorum adipisci eaque quia consequuntur. Voluptate maxime quidem quaerat eligendi facere deleniti! <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet minus quis officia consequuntur cum, quasi quidem iusto iste omnis beatae ducimus consectetur nam alias, commodi, illum excepturi dolor necessitatibus.grg3ggfrfgfgfgg
                  </Text>
                </Flex>
                <Bottom>
                  <Icon>
                    <img src={icon1} alt="" />
                    <span>
                      <Author>John Doe</Author>
                      <Time>4:53pm</Time>
                    </span>
                  </Icon>
                  <Bookmark></Bookmark>
                </Bottom>
            </Card>
            <Card>
                <Title>First Title</Title>
                <Flex>
                  <Image><img src={img1} alt="" /></Image>
                  <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae a aut ut culpa, provident aspernatur! Voluptates placeat illum harum sit ex veniam, labore mollitia at dolores asperiores laborum. Autem, quos. <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita necessitatibus molestias animi. Repudiandae deleniti sequi velit corporis natus. Dolorum adipisci eaque quia consequuntur. Voluptate maxime quidem quaerat eligendi facere deleniti! <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet minus quis officia consequuntur cum, quasi quidem iusto iste omnis beatae ducimus consectetur nam alias, commodi, illum excepturi dolor necessitatibus.grg3ggfrfgfgfgg
                  </Text>
                </Flex>
                <Bottom>
                  <Icon>
                    <img src={icon1} alt="" />
                    <span>
                      <Author>John Doe</Author>
                      <Time>4:53pm</Time>
                    </span>
                  </Icon>
                  <Bookmark></Bookmark>
                </Bottom>
            </Card>
            <Card>
                <Title>First Title</Title>
                <Flex>
                  <Image><img src={img1} alt="" /></Image>
                  <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae a aut ut culpa, provident aspernatur! Voluptates placeat illum harum sit ex veniam, labore mollitia at dolores asperiores laborum. Autem, quos. <br />
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita necessitatibus molestias animi. Repudiandae deleniti sequi velit corporis natus. Dolorum adipisci eaque quia consequuntur. Voluptate maxime quidem quaerat eligendi facere deleniti! <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque amet minus quis officia consequuntur cum, quasi quidem iusto iste omnis beatae ducimus consectetur nam alias, commodi, illum excepturi dolor necessitatibus.grg3ggfrfgfgfgg
                  </Text>
                </Flex>
                <Bottom>
                  <Icon>
                    <img src={icon1} alt="" />
                    <span>
                      <Author>John Doe</Author>
                      <Time>4:53pm</Time>
                    </span>
                  </Icon>
                  <Bookmark></Bookmark>
                </Bottom>
            </Card>
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
  width: 300px;
  position: relative;
  font-weight: 400;
  text-align: center;
  font-style: oblique;
  margin: 10px auto;
  ::after, ::before{
    content: " ";
    position: absolute;
    width: 50px;
    height: 3px;
    top: 30px;
    border-radius: 0px 4px 4px 0px;
    background-color: #FF785A;
  }::after{
    left: 0;
    border-radius: 4px 0px 0px 4px;
  }
  ::before{
    border-radius: 0px 4px 4px 0px;
    right: 0;
  }
`
const Flex = styled.div`  
  display: flex;
  justify-content: space-between;
  @media only screen and (min-width:300px) and (max-width:800px){
    flex-wrap: wrap;
    justify-content: center;
  }
`
const Bottom = styled.div`
  margin-top: 20px;
`
const Icon = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  align-items: center;
  img{
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`
const Author = styled.div``
const Time = styled.div``
const Bookmark = styled.div``