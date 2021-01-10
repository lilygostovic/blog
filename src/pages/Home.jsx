import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Nav from '../sections/Nav';
import BlogDisplay from '../sections/BlogDisplay';
import Sub from '../sections/Subscribe';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import pic from '../images/homeMain.jpg'

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
    text-shadow: 0px 0px 12px rgba(0,0,0,0.67);

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
    width: 100%
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
            <Nav/>

            {/* Picture and Title */}
            <Center>
                <Container><MainPic src={pic} /></Container>
                <Header>Lily's Diaries</Header>
            </Center>

            {/* Everything else  */}
            <All>

                {/* Section on the left side of the page */}
                <Left>

                    {/* Pink Greeting text */}
                    <Greeting>
                        My name is Lily Gostovic. I am the seventeen year old girl from Toronto. I am also the very happy, very hyper, and very energetic blurry girl at an AJR concert with her tongue out in the above picture.
                    </Greeting>

                    {/* Longer black text */}
                    <Text>
                        Whether you know me or not, you have somehow managed to make it to my blog. I guess I will start by telling you a little about myself since you may be about to read what I like to think of as my little online diary. As you’ve probably managed to figure out by now, my name is Lily and I am a seventeen year old girl from Toronto. I spent all of my seventeen years in this world living in the same house in Toronto with my mother, father, and brother who despite being significantly taller than me, is two and a half year younger than me. I am a senior in high school and am heading to McGill University next year to complete a Bachelor of Arts degree. I am quite unsure of what the future holds for me in regards to a career path, and pretty much everything else as well. I started this blog while in quarantine to give my thoughts, pictures, and writing pieces a little home to live. Here are the innermost thoughts and opinions of the mind of Lily Gostovic. Enjoy.
                    </Text>

                    {/* imported component under sections */}
                    <BlogDisplay
                        category='the latest'
                    ></BlogDisplay>

                    {/* Back to top button at the bottom of the page */}
                    {/* imported component under sections */}
                    <BackToTop/>
                </Left>

                {/* About me section on the right side of the page */}
                {/* imported component under sections */}
                <Subscribe/>

            </All>

            {/* Spacing makes the page longer */}
            <Spacing/>

        </Main>
    );
};

export default Home;