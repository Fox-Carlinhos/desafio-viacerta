import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: #8884;
    border-radius: 20px;

  }

  ::-webkit-scrollbar-thumb {
    background: #3333;
    border-radius: 20px;
  }

  :root {
    --background: #224d74;
    --white: #FFFFFF;
    --labels: #020202;
    --field-text: #3C3C3C;
    --blocked-field: #d4d4d4;
    --cancel-button: #989898;
    --success-button: #F79028;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif !important;
  }

  html { 
    @media (min-width: 1080px) {
      font-size: 93.75%;
    }
    @media (min-width: 720px) {
      font-size: 87.5%;
    }
    @media (min-width: 420px) {
      font-size: 77.5%;
    }
  }

  body { 
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    border: 0;
    outline: 0;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  button { 
    outline: none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #111;
  }
`;
