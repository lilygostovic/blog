/*
 * HOME
 * the home page of the blog, has a brief intro
 * about me followed by a display of all blog
 * posts with a 'subscribe' section on the right
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Nav from '../sections/Nav';
import BlogDisplay from '../sections/BlogDisplay';
import Sub from '../sections/Subscribe';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import pic from '../images/homeMain.jpg';

const Main = styled.div`
  font-family: 'Lora', serif;
  text-align: center;
  width: 100%;
`;
const Header = styled.h1`
  color: white;
  font-size: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  text-shadow: 0px 0px 12px rgba(0, 0, 0, 0.67);

  width: 100%;
  position: absolute;
  top: 40%;
`;
const Greeting = styled.div`
  color: #c6708c;
  margin: 10% 15%;
  text-align: center;
  line-height: 1.5;
`;
const Text = styled.p`
  margin: 5% 5% 10% 5%;
  line-height: 2;
`;
const Center = styled.div`
  text-align: center;
  position: relative;
`;
const MainPic = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
`;
const Container = styled.div`
  width: 100%;
  height: 900px;
  overflow: hidden;
  margin: auto;
`;
const All = styled.div`
  display: inline-flex;
  margin: 0px;
  width: 100%;
`;
const Left = styled.div`
  margin: 0px 5%;
  width: 80%;
`;
const Subscribe = styled(Sub)`
  width: 20%;
  margin: 0px;
`;

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <Main>
      {/* Navigation Bar */}
      {/* imported component under sections */}
      <Nav />

      {/* Picture and Title */}
      <Center>
        <Container>
          <MainPic src={pic} />
        </Container>
        <Header>Lily's Diaries</Header>
      </Center>

      {/* Everything else  */}
      <All>
        {/* Section on the left side of the page */}
        <Left>
          {/* Pink Greeting text */}
          <Greeting>
            My name is Lily Gostovic. I am an eighteen year old girl from
            Toronto who loves coding, rugby, and skiing. I am currently living
            in Montreal completing my bachelor of Arts degree in computer
            science at McGill University. Welcome to my life.
          </Greeting>

          {/* Longer black text */}
          <Text>
            Whether you know me or not, you have somehow managed to make it to
            my "blog". Congrats! You're in for a treat! A little about myself: I
            am a sophomore at McGill University on the road to completing a
            Bachelor of Arts with a major in computer science, and a minor in
            linguistics. I started this blog while in quarantine to give my
            thoughts, pictures, and writing pieces a home to live, as well as to
            learn how to develop and deploy a website from start to finish. A
            mini passion project that budded from boredom and curiosity while
            being forced to stay home has now taught me the basics of web design
            and most of what I know about HTML, CSS, and Javascript. Keep
            scrolling to read some of my thoughts and opinions, or see some
            pictures of my life, raw and unedited. Enjoy.
          </Text>

          {/* imported component under sections */}
          <BlogDisplay category="the latest"></BlogDisplay>

          {/* Back to top button at the bottom of the page */}
          {/* imported component under sections */}
          <BackToTop />
        </Left>

        {/* About me section on the right side of the page */}
        {/* imported component under sections */}
        <Subscribe />
      </All>

      {/* Spacing makes the page longer */}
      <Spacing />
    </Main>
  );
};

export default Home;
