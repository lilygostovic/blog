/*
 * VIDEO
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Nav from '../sections/Nav';
import GeneralContent from '../sections/GeneralContent';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import mainIMG from '../images/videoMain.jpg';
import videos from '../data/videos.json';

const Main = styled.div`
  font-family: 'Lora', serif;
`;
const Header = styled.h2`
  margin: 0px;
  padding: 30px 0px;
  width: 100%;
  text-transform: uppercase;
  text-align: center;
  color: #808080;
  font-weight: 300;
`;
const Break = styled.hr`
  width: 80%;
  margin: auto;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;
const Group = styled.div`
  width: 100%;
`;
const VideoSection = styled.div`
  text-align: center;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const VideoTitle = styled.h1`
  color: black;
  font-size: 40px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  margin: 20px 20% 5px 20%;
  /* top right bottom left */
`;
const Container = styled.div`
  opacity: 0.9;
  height: 409.5px; /* 315 */
  width: 728px; /* 560 */
  margin: auto;
`;
const Subtitle = styled.p`
  color: #989898;
  margin: 30px 25% 40px 25%;
  text-align: center;
  line-height: 1.5;
`;
const Top = styled.div`
  display: inline-block;
  margin: 0px 0px 20px 0px;
`;
const Date = styled.p`
  font-size: 13px;
  color: #989898;
  text-decoration: none;
  margin: 0;
  padding: 15px;
  display: inline-block;
  text-transform: uppercase;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: #c6708c;
  &:hover {
    color: #989898;
  }
`;
const FromLily = styled.p`
  color: #989898;
  font-size: 13px;
  display: inline-block;
  text-transform: uppercase;
`;
const WatchOnYouTube = styled.a`
  display: inline-block;
  color: #c6708c;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  transition: all 0.5s ease;
  outline: 2px solid #f4f4f4;
  padding: 15px;
  &:hover {
    color: black;
  }
`;
const BottomLine = styled.hr`
  display: inline-block;
  width: 25%;
  margin: auto;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

const Video = () => {
  window.scrollTo(0, 0);
  return (
    <Main>
      <Nav></Nav>

      <GeneralContent
        title="Video"
        fullIMG={mainIMG}
        subtitle="SOMEthing super artsy abaout how videos transport you to or back to a point in your life or the life of somebody else to better remember and reminise about the good times you had."
        mainText="What making videos means to me and why I love making them and spend so much time and effort on them. maybe a little about how i used to use that super cool program but now only use imovie but how it still works because imovie actually has a lot of cool features you can use if you know it and try a bunch of differen things!"
      ></GeneralContent>

      <Group>
        <Break />
        <Header>Category: Video</Header>
        <Break />
      </Group>

      {videos.map((video) => {
        return (
          <VideoSection>
            <VideoTitle>{video.title}</VideoTitle>

            <Top>
              <Date>{video.date}</Date>
              <FromLily>
                From <MyLink to={`/`}>Lily's Diaries</MyLink>
              </FromLily>
            </Top>

            <Container>
              <iframe
                width="100%"
                height="100%"
                src={video.src}
                frameborder={video.frameborder}
                allow={video.allow}
                allowfullscreen
              ></iframe>
            </Container>

            <Subtitle>{video.subtitle}</Subtitle>

            <BottomLine />
            <WatchOnYouTube href={video.link} target="_blank">
              Watch On YouTube
            </WatchOnYouTube>
            <BottomLine />
          </VideoSection>
        );
      })}

      {/* <BackToTop /> */}

      <Spacing />
    </Main>
  );
};

export default Video;
