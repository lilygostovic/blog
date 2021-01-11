import React from 'react';
import styled, { css } from 'styled-components';
import Nav from '../sections/Nav';
import GeneralContent from '../sections/GeneralContent';
import BlogDisplay from '../sections/BlogDisplay';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import mainIMG from '../images/liveMain.jpg';

const Main = styled.div`
  font-family: 'Lora', serif;
`;

const Live = () => {
  window.scrollTo(0, 0);
  return (
    <Main>
      <Nav></Nav>

      <GeneralContent
        title="Write"
        fullIMG={mainIMG}
        subtitle="Life is beautiful. Life is extraordinary. Life is all around us."
        mainText="Might think of making this a component like nav... will be the same layout for global, skiing, gallery, film, and music pages. Links to all the other blog posts I have written about moving. All links should have a photo cover with a cute name. Possibly center this, decide once there is more actual content here."
      ></GeneralContent>

      <BlogDisplay category="write"></BlogDisplay>

      <BackToTop />

      <Spacing />
    </Main>
  );
};

export default Live;
