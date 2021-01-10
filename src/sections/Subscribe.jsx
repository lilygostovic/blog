/*
 * SUBSCRIBE
 * section on the right of the home page that links
 * the the about me blog post and has a short little
 * desecription of me.
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import pic from '../images/subscribe.jpg'


const Main = styled.div` /* STICKY */
    position: sticky;
    position: -webkit-sticky;
    top: 85px; /* or 125 px */
    justify-content: center;
    align-items: center;
    box-shadow: 0px 10px 200px -5px #F0F0F0;

    font-family: 'Lora', serif;
    margin-top: 100px;
    margin-left: 50px;
    width: 250px;
    /* outline: 2px solid #f4f4f4; */

`;
const Title = styled.h1`
    margin: 0px;
    padding: 20px 20px 20px 10px;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
    text-align: center;
`;
const Container = styled.div`
    text-align: center;
    padding: 0px 10px;
    overflow: none;
`;
const Pic = styled.img`
    width: 90%;
    object-fit: cover;
`;
const Text = styled.p`
    color: #707070;
    font-size: 15px;
    line-height: 2;
    padding: 0px 10% 20px 10%;
    text-align: center;
`;
const Wrapper = styled.div`
    width: 100%
`;
const MyLink = styled(Link)`
    text-decoration: none;
    color: #c6708c;
    transition: all 0.5s ease;

    &:hover {
        color: black;
    }
`;


const Subscribe = () => {
    return (
        <Wrapper>
            <Main>
                <Title><MyLink to={`/blog-post/about-me`}>About Me</MyLink></Title>

                <Container>
                    <Pic src={pic} />
                </Container>

                <Text>
                    Hi! I'm Lily Gostovic, welcome to my online diary! I am a seventeen year old girl from Toronto, Canada oversharing her life on the internet on her virtual diary. Enjoy!
                </Text>
            </Main >
        </Wrapper>
    );
};

export default Subscribe;