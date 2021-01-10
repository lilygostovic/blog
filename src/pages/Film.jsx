/*
 * FILM
 * a display of all my rolls of film
 * and any blogs I write about how
 * amazing film is
 * 
 * FINISHED
 */

 import React from 'react';
import styled, { css } from 'styled-components';
import Nav from '../sections/Nav';
import GeneralContent from '../sections/GeneralContent';
import BlogDisplay from '../sections/BlogDisplay';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import mainIMG from '../images/filmMain.jpg';

const Main = styled.div`
    font-family: 'Lora', serif;
`;

const Film = () => {
    window.scrollTo(0, 0);
    return (
        <Main>
            <Nav></Nav>

            <GeneralContent
                title='Film'
                fullIMG={mainIMG}
                subtitle='I like to believe that my film rolls show the realest parts of my life. By following me wherever I go, my film camera captures all the moments of my life I deem to be the ones I never want to lose.'
                mainText='Film has given me the ability to capture moments of my life, at the rawest, purest form. With one quick charge up of the flash and an even quicker flash and snap (!) no one is able to prepare and pose for my pictures. Using my film camera allows me to feel connected and in the moment while simultaneously ensuring I will never forget that moment while I still have the film. Again, I believe that my film rolls are the most authentic depiction of my life. My film camera is to me as a wallet is to most normal people. Without a doubt, it accompanies me wherever I go! It is my best friend. It is my partner in crime. I love it, and all the memories it brings with it more than nearly anything.'
            ></GeneralContent>

            <BlogDisplay
                category='film'
            ></BlogDisplay>

            <BackToTop/>

            <Spacing/>
        </Main>
    );
};

export default Film;