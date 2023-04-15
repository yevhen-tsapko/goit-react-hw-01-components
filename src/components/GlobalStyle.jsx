import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
  body {
     font-family: "Montserrat", Sans-serif;
  font-size: 16px;
  letter-spacing: 0.02em;
  background-color: #8da3b2;
  }
  h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-top: 0;
  margin-bottom: 0;
}

ul,li {
  padding: 0;
  list-style: none;
  margin: 0;
}

img {
  display: block;
  width: 100%;
  height: auto;
}
`;
