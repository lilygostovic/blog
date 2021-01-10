/*
 * BACK TO TOP
 * button at the bottom of page that when clicked brings you back up to the top
 */

import React from 'react';
import styled from 'styled-components';

const ToTop = styled.button`
    display: inline-block;
    color: #c6708c;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
    transition: all 0.5s ease;
    outline: 2px solid #f4f4f4;
    border: none;
    padding: 15px;
    cursor: pointer;
    background-color: #F8F8F8;
    &:hover {
        color: black;
    }
`;
const Main = styled.div`
    font-family: 'Lora', serif;
    text-align: center;
`;
const BottomLine = styled.hr`
    display: inline-block;
    width: 40%;
    margin: auto;
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
`;

function scrollToTop () {
    window.scrollTo(0, 0);
}

const BackToTop = () => {
    return (
        <Main>
            <BottomLine />
            <ToTop onClick={scrollToTop}>Back To Top</ToTop>
            <BottomLine />
        </Main >
    );
};

export default BackToTop;