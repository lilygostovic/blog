/*
 * TRAVEL
 * a display of all my blogs about travel
 * some travel diaries, some bucket lists,
 * some lists of where I have been already.
 * a place to remember the details of my travels
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
import mainIMG from '../images/travelMain.jpg';

const Main = styled.div`
  font-family: 'Lora', serif;
`;

const Travel = () => {
  window.scrollTo(0, 0);
  return (
    <Main>
      <Nav></Nav>

      <GeneralContent
        title="Travel"
        fullIMG={mainIMG}
        subtitle="My first time on a plane, I was three months old (heading to Cabo, no wonder I love dancing and the sun!). Since that first experience of flying through the air to a faraway place that looked, felt, and smelt completely different, I have never looked back home."
        mainText="Growing up with parents who have a passion for travel, I have been exposed to travelling my whole life. Through the many trips I have been lucky enough to find myself on, I have developed a love (maybe even addiction) for travelling. From exposing my eyes to beautiful landscapes unlike anything back home, to introducing my 10, 000 taste buds to a new cuisine, to meeting all sorts of incredibly different people, with endlessly different stories, travelling has taken my heart. Along with the majority of my bank account."
      ></GeneralContent>

      <BlogDisplay category="travel"></BlogDisplay>

      <BackToTop />

      <Spacing />
    </Main>
  );
};

export default Travel;
