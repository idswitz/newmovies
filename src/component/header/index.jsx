import React from "react";
import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, TMDBImg, LogoImg, } from "./Header.styles";
const Header = () =>{
    return(
        <Wrapper>
            <Content>
                <a href="/">
                    <LogoImg src= {RMDBLogo} alt="rmdb-logo"/>
                </a>

                <TMDBImg src= {TMDBLogo} alt="tmdb-logo"/>
            </Content>
        </Wrapper>
    );                      
}


export default Header;