import styled from "styled-components";
import {device} from "../../DevicesBreakpoints"

export const StyledReviewSectionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 15rem;
    min-height: 30rem;


    @media ${device.tablet}{
        flex-direction: column;
        min-height: 50rem;
    }
`

export const StyledReview = styled.div`
    border-radius: 3rem;
    background: #df6969;
    color: white;
    transition: 0.5s;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.tablet}{
        margin-top: 5rem;
    }


    &:hover{
    background: #df6969;
    background: rgba(203, 195, 196, 0.201);
    color: black;
    cursor: pointer;
    } 


    & ${"h3"}{
        font-size: 4.5rem;
    }

    & ${"p"}{
    max-width: 40rem;
    font-size: 2rem;

    @media ${device.tablet}{
        width: 50%;
         margin: auto;
    }
    }
`