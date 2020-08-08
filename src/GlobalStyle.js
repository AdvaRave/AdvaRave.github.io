import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {    
    margin:  0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    color: ${props => props.theme.colors.textMain};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
    font-weight: 300;
  }

  a {
    color: ${props => props.theme.colors.textMain};
    font-size: 16px;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 14px;
    padding: 5px;
  }

  ul {
    list-style: none;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${props => props.theme.colors.textMain};
    font-size: 16px;
    outline: none;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
  }
`;

export const Theme = {
  colors: {
    textMain: '#555',
    captionBlack: '#333',
    backgroundGrey: '#F0F1F5',
    borderGrey: '#ebecf0',
    white: '#fff',
    headerLightBlue: '#0BC5CC',
    headerDarkBlue: '#30A7D9',
    prefixBlue: "#30A7D9",
    backgroundBlue: '#E7F7FF',
    backgroundBlueOpaque: 'rgba(231, 247, 255, 0.9)',
    whiteOpaque: 'rgba(255, 255, 255, 0.95)'
  },
  fontSizes: {
    test: 2
  }
};