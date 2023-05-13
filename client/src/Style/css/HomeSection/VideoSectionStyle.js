import styled from "styled-components";
import {device} from "../../DevicesBreakpoints"



export const StyledVideoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20rem;
    background-color: ${(props) => props.bgColor} ;
    text-align: center;
    transition: all 0.1s;



    &:hover{
        background-color: #df6969dd;
    }


    & ${"html"}{
        font-size: 1000%;
    }


`


export const StyledVideoText = styled.div`

& ${"h2"}{
    font-size: 6rem;
}

& ${"p"}{
    font-size: 2rem;
    max-width: 50rem;
    margin-bottom: 4rem;
    margin-top: 2rem;
}

`


export const MyVideoDiv = styled.div`

    & ${".myvideo"}{
        @media ${device.laptop} {
        width: 50rem;
       height: 25rem;
  }

        @media ${device.mobileM} {
        width: 30rem;
        height: 15rem;
  }
    }
`
