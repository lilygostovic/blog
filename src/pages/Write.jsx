/*
 * WRITE
 * a display of all my essay posts. a combination of
 * personal essays, as well as essays and research
 * papers written for classes
 */

import React from 'react';
import styled, { css } from 'styled-components';

import NH from '../sections/NavHeader';
import ND from '../sections/NavDropdown';
import GeneralContent from '../sections/GeneralContent';
import BlogDisplay from '../sections/BlogDisplay';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import mainIMG from '../images/liveMain.jpg';

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

const Live = () => {
  window.scrollTo(0, 0);
  return (
    <Main>
      {/* Navigation Bars, only one shows depending on width of webpage */}
      <NavHeader />
      <NavDropdown />

      <GeneralContent
        title="Write"
        fullIMG={mainIMG}
        subtitle="'The true alchemists do not change lead into gold; they change the world into words.' - William H. Gass"
        mainText="I have never thought of myself as much of a writer. Writing is difficult. It takes focus and dedication to finish a piece of writing that you are proud of and happy with. Although I have always found writing particularly challenging, I have always appreciated the sense of accomplishment I feel after finishing an essay I am proud of. Instead of letting my essays die once they have been graded by my professors, I have listed some of my favourites below to prolong their lives a little longer."
      ></GeneralContent>

      <BlogDisplay category="write"></BlogDisplay>

      <BackToTop />

      <Spacing />
    </Main>
  );
};

export default Live;
