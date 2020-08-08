import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Data from '../data';
import Gallery from './Gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px;

  @media only screen and (max-width: 1024px) {
    padding: 40px 0 0 0;
  }
`;

const Nav = styled.nav`
  padding: 5px 80px 40px 20px;
  align-self: baseline;
  width: 200px;
  position: sticky;
  top: 40px;
  text-align: left;

  span {
    padding-left: 10px;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const NavButton = styled.a`
  font-size: 16px;
  display: block;
  padding-bottom: 25px;
  color: ${props => props.theme.colors.textMain};

  ${props => props.selected && `
    font-weight: 700;
    color: ${props.theme.colors.captionBlack};
  `}

  ${props => props.sub && `
    padding-left: 20px;
  `}

  &:first-child {
    color: ${props => props.theme.colors.prefixBlue};
  }
`;

const Content = styled.div`
  max-width: 960px;
`;

const Header = styled.header`
  height: calc(100vh - 61px);
  background: ${props => props.theme.colors.white} url("${props => props.image}") center / cover no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

const HeaderBottom = styled.div`
  color: ${props => props.theme.colors.captionBlack};
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  padding: 30px;

  h1 {
    font-size: 32px;
    padding-bottom: 20px;
  }
`;

const ContinueButton = styled.a`
  display: inline-block;
  font-size: 8px;
  border: 2px solid ${props => props.theme.colors.textMain};
  padding: 4px 10px 2px 10px;
  border-radius: 50%;

  &:hover {
    border-color: ${props => props.theme.colors.textMain};
    background-color: ${props => props.theme.colors.backgroundGrey};
  }
`;

const StyledSection = styled.section`
  text-align: left;
  padding: 40px;
  
  &:first-child {
    padding-top: 0;
  }

  ${props => props.type === 'persona' && `
    background-color: ${props.theme.colors.backgroundBlue};
    margin-bottom: 40px;
  `}
  
  h3 {
    border-left: 7px solid ${props => props.theme.colors.prefixBlue};
    padding-left: 15px;
    color: ${props => props.theme.colors.captionBlack};
    font-weight: 900;

    ${props => props.sub && `
      border-left: 0;
      color: ${props.theme.colors.textMain}; 
    `}
  }

  > p {
    padding: 20px 0 0 15px;
  }

  > p b {
    font-weight: 400;
    background-color: ${props => props.theme.colors.backgroundBlue};
  }
`;

const PersonaSelectorContainer = styled.div`
  padding: 40px 40px 40px 15px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1024px) {
    padding: 40px 5px;
  }
`;

const PersonaContainer = styled.div`
  h5 {
    font-size: 16px;
    padding-bottom: 2px;
  }
`;

const PersonSelector = styled.div`
  button {
    color: ${props => props.theme.colors.prefixBlue};
    text-align: left;

    &:not([selected]) {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding-right: 40px;
  }
`;

const PersonaImage = styled.div`
  background: ${props => props.theme.colors.white} url("${props => props.image}") center/cover no-repeat;
  flex: 1;

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

const PersonaSections = styled.div`
  flex: 3;
  padding: 40px;
  background-color: ${props => props.theme.colors.white};
`;

const PersonaSection = styled.div`
  padding-bottom: 20px;

  &:last-child {
    padding-bottom: 0;
  }
`;

const StyledPersona = styled.div`
  display: flex;

  @media only screen and (max-width: 1024px) {
    display: block;
  }
`;

const StyledImageGallery = styled.div`
  padding-top: 40px;
`;

const StyledProject = styled.div`
  text-align: center;
`;

const Persona = ({name, image, sections}) => {
  return (
    <StyledPersona>
      <PersonaImage image={image} name={name}/>
      <PersonaSections>
        {sections.map(({title, text}, index) => (
          <PersonaSection key={index}>
            <h5>{title}</h5>
            <p dangerouslySetInnerHTML={{__html: text}}></p>
          </PersonaSection>
        ))}
      </PersonaSections>
    </StyledPersona>
  );
};

const Section = ({id, sub, type, title, text, images, mainPersonas, secondaryPersonas, personas}) => {
  const [currentPersona, setCurrentPersona] = useState(mainPersonas?.[0]);

  return (
    <StyledSection type={type} id={id} sub={sub}>
      <h3>{title}</h3>
      <p dangerouslySetInnerHTML={{__html: text}}></p>
      {images.length > 0 && 
      <StyledImageGallery>
        <Gallery images={images}/>
      </StyledImageGallery>}

      {type === 'persona' && 
        (<PersonaContainer>
          <PersonaSelectorContainer>
            <PersonSelector>
              <h5>Our main personas are:</h5>
              <ul>
                {mainPersonas.map((p, index) => (
                <li key={index}>
                  <button onClick={() => setCurrentPersona(p)} selected={p === currentPersona}>{p}</button>
                </li>))}
              </ul>
            </PersonSelector>
            {secondaryPersonas.length > 0 && <PersonSelector>
              <h5>Our secondary personas are:</h5>
              <ul>
                {secondaryPersonas.map((p, index) => (
                <li key={index}>
                  <button onClick={() => setCurrentPersona(p)} selected={p === currentPersona}>{p}</button>
                </li>))}
              </ul>
            </PersonSelector>}
          </PersonaSelectorContainer>
          <Persona name={currentPersona} {...personas[currentPersona]} />
        </PersonaContainer>) }
    </StyledSection>
  );
};

const Project = ({match}) => {
  const { projects, personas } = Data;
  const { params: { projectName } } = match;
  const { title, sections, image } = projects.find(project => project.name === projectName);

  const sectionId = (idx) => `section-${idx}`;
  const [currentSection, setCurrentSection] = useState(sectionId(0));

  useEffect(() => {
    const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.bottom - 40 > 0 &&
             rect.right > 0 &&
             rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
             rect.top < (window.innerHeight || document.documentElement.clientHeight);
    }
    
    const handleScroll = () => {
      for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
        const sectionElement = document.getElementById(sectionId(sectionIndex));
        if (sectionElement && isElementInViewport(sectionElement)) {
          return setCurrentSection(sectionId(sectionIndex));
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections, currentSection]);

  return (
    <StyledProject>
      <Header image={image}>
        <HeaderBottom>
          <h1>{title}</h1>
          <ContinueButton href="#container">
            <FontAwesomeIcon icon={faChevronDown} />
          </ContinueButton>
        </HeaderBottom>
      </Header>
      <Container id="container">
        <Nav>
          <NavButton href="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Home</span>
          </NavButton>
          {sections.map((section, index) => (
            <NavButton href={`#${sectionId(index)}`} key={index} selected={sectionId(index) === currentSection} sub={section.sub}>{section.title}</NavButton>
          ))}
        </Nav>
        <Content>
          {sections.map((section, index) => 
            <Section key={index} id={sectionId(index)} personas={personas} {...section} />
          )}
        </Content>
      </Container>
    </StyledProject>
  );
}

export default Project;