import styled from "styled-components";
import { device } from "../../DevicesBreakpoints";

export const StyledHeroSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;


  @media ${device.laptop}{

      flex-direction: column-reverse;

}
`;

export const StyledHeroImgDiv = styled.div`
  & ${"img"} {

    @media ${device.tablet}{
       width: 45rem;
    }
  }
`;

export const StyledHeaderText = styled.div`
  font-size: 2rem;
  justify-content: center;
  text-align: center;

  & ${"h1"}{
    font-size: 8rem;
  }

  & ${"p"}{
    font-size: 2.2rem;
    max-width: 80rem;
    line-height: 3.5rem;
    margin-top: 1rem;
  }



  & ${"button"} {
    border: 0;
    outline: 0;
    padding: 2rem 7rem;
    border-radius: 20rem;
    background-color: #df6969;
    margin-top: 3rem;
    font-size: 2.5rem;
    cursor: pointer;
    transition: all 0.1s;
  }

  & ${"button"}:hover {
      opacity: 0.5;
      color: white;

  }
`;
