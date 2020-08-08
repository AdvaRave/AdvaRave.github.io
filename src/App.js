import React from 'react';
import ScrollToTop from './ScrollToTop';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import Home from './components/Home';
import Login, {key, hashed} from './components/Login';
import Project from './components/Project';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

const Header = styled.header`
  padding: 15px;
  box-shadow: 0 4px 12px 0 rgba(0,0,0,.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 3;
`;

const Logo = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid ${props => props.theme.colors.textMain};
`;

const SocialList = styled.ul`
`;

const StyledSocialItem = styled.li`
  display: inline-block;
  padding: 0 7px;

  a {
    font-size: 20px;
    opacity: 0.8;
  }

  &:nth-child(1) a {
    font-size: 18px;
  }

  &:nth-child(4) a {
    position: relative;
    font-size: 9px;
    border: 2px solid ${props => props.theme.colors.textMain};
    padding: 2px 3px 1px 3px;
    border-radius: 2px;
    top: -4px;
  }
`;

function PrivateRoute ({component: Component, authed, ...props}) {
  return (
    <Route
      {...props}
      render={(props) => localStorage.getItem(key) === hashed
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

const SocialItem = ({link, icon}) => {
  return (
    <StyledSocialItem>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={icon} />
      </a>
    </StyledSocialItem>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Header>
          <Link to="/">
            <Logo />
          </Link>
          <SocialList>
            <SocialItem link="https://dribbble.com/adva120" icon={faDribbble}  />
            <SocialItem link="https://www.instagram.com/advarave/" icon={faInstagram} />
            <SocialItem link="mailto:advarave@gmail.com" icon={faEnvelope} />
            <SocialItem link="https://www.linkedin.com/in/adva-rave" icon={faLinkedinIn} />
          </SocialList>
        </Header>
        <ScrollToTop>
          <Switch>
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/projects/:projectName" component={Project} />
          </Switch>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
