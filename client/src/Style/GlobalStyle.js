import { createGlobalStyle } from 'styled-components'
import { device } from "../Style/DevicesBreakpoints";

export const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  @media ${device.laptop} {

    html {
      font-size: 40%;
  }
    
  }

  @media ${device.tablet} {
    html {
      font-size: 30%;
  }
  }
`