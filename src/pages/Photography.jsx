/*
 * PHOTOGRAPHY
 * a display of all my blogs about photography
 * and vsco journals from around the world
 */

import React from 'react';
import styled, { css } from 'styled-components';

import NH from '../sections/NavHeader';
import ND from '../sections/NavDropdown';
import GeneralContent from '../sections/GeneralContent';
import BlogDisplay from '../sections/BlogDisplay';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import mainIMG from '../images/galleryMain.jpg';

const Main = styled.div`
  font-family: 'Lora', serif;
`;
const NavHeader = styled(NH)`
  @media (max-width: 800px) {
    display: none;
  }
`;
const NavDropdown = styled(ND)`
  @media (min-width: 801px) {
    display: none;
  }
`;

const Gallery = () => {
  window.scrollTo(0, 0);
  return (
    <Main>
      {/* Navigation Bars, only one shows depending on width of webpage */}
      <NavHeader />
      <NavDropdown />

      <GeneralContent
        title="Photography"
        fullIMG={mainIMG}
        subtitle="Snapshots of the world around me, captured through the lens mounted on my Canon EOS 70D."
        mainText="There is an incredible amount of beauty in this world. I use my camera to try to capture as much of it as possible so I can remember it forever. I take pictures to remember. I take pictures to share with those who can not have first hand experiences. Photography enables anybody with access to photos, whether through the internet or physical prints, to travel around the world. I hope that my photos can bring someone to a place they have never yet before been. If I can give one person the sense of familiarity with a strange place, then my goal as a photographer is complete."
      ></GeneralContent>

      <BlogDisplay category="photography"></BlogDisplay>

      <BackToTop />

      <Spacing />
    </Main>
  );
};

export default Gallery;
