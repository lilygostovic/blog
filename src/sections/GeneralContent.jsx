/*
 * GENERAL CONTENT
 * to be used as the main section of all pages with blog previews
 * header, subtitle, and main body
 */

import React from 'react';
import styled, { css } from 'styled-components';

const Main = styled.div`
    font-family: 'Lora', serif;
`;
const Header = styled.h1`
    color: white;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    text-shadow: 0px 0px 12px rgba(0,0,0,0.67);

    width: 100%;
    position: absolute;
    top: 40%;
`;
const Center = styled.div`
    text-align: center;
    position: relative;
`;
const MainPic = styled.img`
    opacity: 0.9;
    object-fit: cover;
    height: 500px; /* or 800px or 500px */
    width: 100%;
`;
const Greeting = styled.div`
    color: #c6708c;
    margin: 100px 25%;
    text-align: center;
    line-height: 1.5;
`;
const Text = styled.p`
    margin: 100px 15%;
    line-height: 2;
    text-align: center;
`;

const GeneralContent = ({title, fullIMG, subtitle, mainText}) => {
    return (
        <Main>
            <Center>
                <MainPic src={fullIMG}/>
                <Header>{title}</Header>
            </Center>

            <Greeting>{subtitle}</Greeting>

            <Text>{mainText}</Text>

        </Main>
    );
};

export default GeneralContent;