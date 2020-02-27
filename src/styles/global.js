import { createGlobalStyle } from 'styled-components';

const global = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    height: 100vh;
    background: linear-gradient(30deg, #232526, #414345) no-repeat;
  }

  #root {
    width: 90%;
    max-width: 1020px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body, input, button {
    font-family: Montserrat, sans-serif;
  }
`;

export default global;
