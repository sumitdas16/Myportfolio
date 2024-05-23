import React from 'react'
import styled from 'styled-components'
import ProjectCard from '../Cards/ProjectCard';
import {projects} from '../../data/constants';


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
  }
`;

const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
    active && `
    background: ${theme.primary + 20};
    `
  }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`
const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

const Projects = () => {
  const [toggle, setToggle] = React.useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>
          Projects
        </Title>
        <Desc>
          I have Worked on a Wide range of Projects. From Frontend to Backend. Here are Some of My Projects.
        </Desc>
        <ToggleGroup>
          {toggle === "all" ?
            (
              <ToggleButton active value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>
            ) : (<ToggleButton value="all" onClick={() => setToggle("all")}>ALL</ToggleButton>)
          }
          <Divider/>
          {toggle === "frontend app" ?
            (
              <ToggleButton active value="frontend app" onClick={() => setToggle("frontend app")}>FRONTEND APPS</ToggleButton>
            ) : (<ToggleButton value="frontend app" onClick={() => setToggle("frontend app")}>FRONTEND APPS</ToggleButton>)
          }
          <Divider />
          {toggle === "backend app" ?
            (
              <ToggleButton active value="backend app" onClick={() => setToggle("backend app")}>BACKEND APPS</ToggleButton>
            ) : (<ToggleButton value="backend app" onClick={() => setToggle("backend app")}>BACKEND APPS</ToggleButton>)
          }
          <Divider />
          {toggle === "full stack app" ?
            (
              <ToggleButton active value="full stack app" onClick={() => setToggle("full stack app")}>FULL STACK APP</ToggleButton>
            ) : (<ToggleButton value="full stack app" onClick={() => setToggle("full stack app")}>FULL STACK APP</ToggleButton>)
          }

        </ToggleGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCard project={project}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects
