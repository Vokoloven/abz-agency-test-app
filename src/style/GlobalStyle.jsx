import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
${normalize}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 5px;
  }

  ::-webkit-scrollbar-corner {
    height: 0;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 25px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: lightblue;
    border-radius: 25px;
  }

body {
    font-family: ${(p) => p.theme.fonts.nunito};
    font-weight: ${(p) => p.theme.fontWeights.regular};
    background-color: ${(p) => p.theme.colors.background};
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding-left: 0;
}

button {
  cursor: pointer;
}

a {
  color: currentColor;
}

img {
  display: block;
  height: auto;
  max-width: 100%;

  width: 100%;
}

address {
  font-style: normal;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
    padding: 0;
}
`;
