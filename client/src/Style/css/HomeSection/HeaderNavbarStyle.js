import styled from "styled-components";



export const HeaderContainer = styled.div`
    display: flex;
    justify-content:space-evenly;
    border-top-left-radius: 20rem;
    border-top-right-radius: 20rem;
`

export const HeaderUl = styled.ul`
    display: flex;
    gap: 2rem;
    margin-top: 2rem;
    position: relative;
`

export const HeaderLi = styled.li`
 font-size: 3rem;
    border-radius: 20rem;
    padding: .2rem 2rem;
    transition: 0.5s;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    &::after{
         content: "";
    width: 2rem;
    height: 2rem;
    position: absolute;
    background-color: #df6969;
    bottom: 0;
    display: flex;
    visibility: hidden;
    width: 10%;
    transition: all 0s ease;
    height: 0.5rem;
    }

    &:hover::after{
        visibility: visible;

    }
`

export const HeaderA = styled.a`
color: black;
`

export const HeaderImg = styled.img`
    width: 7rem;
    height: 7rem;
    cursor: pointer;
    border-radius: 20rem;
`

