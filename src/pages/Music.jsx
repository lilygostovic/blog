import React from 'react';
import styled, { css } from 'styled-components';
import Nav from '../sections/Nav';
import GeneralContent from '../sections/GeneralContent';
import BlogDisplay from '../sections/BlogDisplay';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import mainIMG from '../images/musicMain.jpg';

const Main = styled.div`
  font-family: 'Lora', serif;
`;

const Music = () => {
  window.scrollTo(0, 0);
  return (
    <Main>
      <Nav></Nav>

      <GeneralContent
        title="Music"
        fullIMG={mainIMG}
        subtitle="Last year I spent 78, 000 minutes listening to music. I am a firm believer that music is one of the biggest powers in the world. It has the ability to amplify emotions, make you feel a certain way, a convey a story in a more powerful way than plain words could ever."
        mainText="I listen to music to motivate me, to help me stay concentrated, and to make every day better. Like most people, depending on the time of day, the weather, and how I am feeling, my taste in music can vary quite greatly. Although I like a wide array of genres, I most often find myself listening to electronic dance music (EDM). The high energy and danceability of EDM matches my personality most of time, and gives me a fun sountrack to mess around trying to dance. When I am not feeling as hyper as usual, I often find myself listening to modern rock or indie music. When I am feeling like a bad b****, I listen to rap."
      ></GeneralContent>

      <BlogDisplay category="music"></BlogDisplay>

      <BackToTop />

      <Spacing />
    </Main>
  );
};

export default Music;
