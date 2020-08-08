import React from 'react';
import styled from 'styled-components';
import Data from '../data';
import { Link } from 'react-router-dom';
import Decor1 from '../images/home/decor1.png';
import Decor2 from '../images/home/decor2.png';
import Decor3 from '../images/home/decor3.png';
import HomeMain from '../images/home/home-main.png';

const Intro = styled.div`
  text-align: center;
  height: calc(100vh - 180px);
  color: ${props => props.theme.colors.headerLightBlue};
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 50px;
    line-height: 55px;
    padding-bottom: 10px;
    font-weight: 900;
  }

  p {
    font-size: 18px;
    line-height: 1.3em;
    font-weight: 500; 
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 0;
  }
`;

const MainImage = styled.div`
  background: ${props => props.theme.colors.white} url("${HomeMain}") center / contain no-repeat;
  height: 293px;
  width: 320px;
  margin-right: 80px;
  box-shadow: -15px -13px 0 ${props => props.theme.colors.headerLightBlue};

  animation: appear 0.5s ease-in;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes appear {
    from { opacity: 0;  }
    to { opacity: 1; }
  }

  @media only screen and (max-width: 1024px) {
    margin-right: 0;
  }
`;

const ProjectsSectionHeader = styled.h2`
  font-size: 24px;
  padding-bottom: 20px;
`;

const Decor = styled.div`
  display: inline-block;
  position: absolute;
  background: transparent url("${props => props.image}") center / contain no-repeat;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  ${props => props.top && `
    top: ${props.top}px;
  `};
  ${props => props.bottom && `
    bottom: ${props.bottom}px;
  `};
  ${props => props.left && `
    left: ${props.left}px;
  `};
  ${props => props.right && `
    right: ${props.right}px;
  `};

  animation: appear 0.5s ease-in ${props => (props.index + 1) * 0.25}s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes appear {
    from { opacity: 0;  }
    to { opacity: 1; }
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

// Projects

const ProjectsSection = styled.div`
  background-color: ${props => props.theme.colors.backgroundGrey};
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: column;
  padding: 60px 0;
  color: ${props => props.theme.colors.headerDarkBlue};
`;

const ProjectsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 960px;
`;

const StyledProject = styled.li`
  display: inline-block;
  margin: 40px;
  width: 400px;
  box-shadow: -12px 15px 17px -20px ${props => props.theme.colors.textMain};
  border-radius: 20px;
  animation: appear 0.5s ease-in ${props => (props.index + 1) * 0.25}s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes appear {
    from { opacity: 0;  }
    to { opacity: 1; }
  }

  @media only screen and (max-width: 1024px) {
    width: 300px;
    margin: 40px 0;
  }

  &:hover {
    box-shadow: -17px 20px 22px -25px ${props => props.theme.colors.textMain};
  }
`;

const ProjectImage = styled.div`
  background: #dde0e6 url("${props => props.image}") center/${props => props.contain ? 'contain' : 'cover'} no-repeat;
  width: 100%;
  height: 300px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  ${props => props.contain && `
    background-size: 80%;
  `};

  @media only screen and (max-width: 1024px) {
    height: 200px;
  }
`;

const ProjectFooter = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.headerDarkBlue};
  padding: 20px 40px;
  min-height: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;

  h3 {
    padding-bottom: 5px;
    font-size: 18px;
  }
`;

// Extra projects 

const ExtraProjectsSection = styled.div`
  text-align: center;
  padding: 60px 0;
  color: ${props => props.theme.colors.headerDarkBlue};
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const ExtraProjectsList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 960px;
`;

const StyledExtraProject = styled.li`
  display: inline-block;
  margin: 40px;
  width: 400px;
  padding: 20px 40px;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.colors.borderGrey};
  box-shadow: -12px 15px 17px -20px ${props => props.theme.colors.textMain};
  border-radius: 20px;

  h3 {
    padding-bottom: 5px;
  }

  a {
    color: ${props => props.theme.colors.headerDarkBlue};
  }

  animation: appear 0.5s ease-in ${props => (props.index + 1) * 0.25}s;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes appear {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @media only screen and (max-width: 1024px) {
    width: 300px;
    margin: 40px 0;
  }
`;

// Quote Section

const QuoteSection = styled.div`
  padding: 60px;
  border-top: 1px solid ${props => props.theme.colors.borderGrey};
  font-style: italic;
  font-size: 22px;
  text-align: center;
  line-height: 40px;

  small {
    display: block;
    font-size: 16px;
  }
`;

const ExtraProject = ({index, title, description, link}) => {
  return (
    <StyledExtraProject index={index}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h3>{title}</h3>
        <p>{description}</p>
      </a>
    </StyledExtraProject>
  );
};

const Project = ({index, name, title, description, homeImage, homeContain, color}) => {
  return (
    <StyledProject index={index}>
      <Link to={`/projects/${name}`}>
        <ProjectImage image={homeImage} contain={homeContain} />
        <ProjectFooter color={color}>
          <h3>{title}</h3>
          <p>{description}</p>
        </ProjectFooter>
      </Link>
    </StyledProject>
  )
};

const Home = () => {
  const {projects, extraProjects} = Data;

  return (
    <div>
      <Intro>
        <MainImage />
        <div>
          <h1>Hi, I'm Adva</h1>
          <p>
            I'm a data driven UX ethusiast.<br />
            I produce elegant solutions with a<br/ >
            human-centered design approach.
          </p>
        </div>
        <Decor top="60" right="120" width="155" height="95" image={Decor1} index={0} />
        <Decor top="105" left="120" width="125" height="275" image={Decor2} index={1} />
        <Decor bottom="-71" right="120" width="155" height="130" image={Decor3} index={2} />
      </Intro>
      <ProjectsSection>
        <ProjectsSectionHeader>My Latest Work</ProjectsSectionHeader>
        <ProjectsList>
          {projects.map((project, index) => (
            <Project index={index} key={index} {...project} />
          ))}
        </ProjectsList>
      </ProjectsSection>
      <ExtraProjectsSection>
        <ProjectsSectionHeader>Extra Projects</ProjectsSectionHeader>
        <ExtraProjectsList>
          {extraProjects.map((extraProject, index) => (
            <ExtraProject index={index} key={index} {...extraProject} />
          ))}
        </ExtraProjectsList>
      </ExtraProjectsSection>
      <QuoteSection>
      “A designer knows he has achieved perfection not when there is nothing left to add,<br/> but when there is nothing left to take away”
      <small>Antoine de Saint-Exupery</small>
      </QuoteSection>
    </div>
  );
}

export default Home;
