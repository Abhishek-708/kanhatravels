import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Nav from "./Nav";


const Header = () =>{
    return <MainHeader>
        <NavLink to="/">
            <img id="imglogo" src="./images/logo1.png" alt="my logo" />
        </NavLink>
        <Nav/>
    </MainHeader>;

};

const MainHeader = styled.header`
    padding: 0 4.8rem;
    height: 7rem;
    background-color: ${({theme}) => theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position:relative;

    #imglogo{
       height: 5rem;
       border-radius: .4rem;
    }

    
`;

export default Header;