/*
 * BLOG DISPLAY
 * section of page with all blog previews
 * each has a cover photo and cute name
 */

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import articles from '../data/articles.json';

const Main = styled.div`
    font-family: 'Lora', serif;
    justify-content: center;
    margin: 100px 0px;

    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    /* display: flex; */
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
`;
const Caption = styled.p`
    font-size: 25px;
    color: black;
    text-decoration: none;
    margin: 30px 7% 25px 7%;
    transition: all 0.5s ease;
`;
const CoverPhoto = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
`;
const Article = styled.div`
    padding: 10px;
    height: 100%; /* 315 */
    width: 709.5px; /* 560 */
    /* margin: 50px; */
    text-align: center;
    align-content: center;
    box-shadow: 0px 10px 200px -5px #F0F0F0;
    &:hover {
        ${Caption} {
            color: #c6708c;
        }
        ${CoverPhoto}{
            transform: scale(1.05);
        }
    }
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
const SubCaption = styled.p`
    font-size: 13px;
    color: #888888;
    text-decoration: none;
    margin: 15px 7% 20px 7%;
`;
const MyLink = styled(Link)`
    text-decoration: none;
`;
const Line = styled.hr`
    border-top: 0.5px solid silver;
    width: 5%;
`;
const Container = styled.div`
    width: 700px;
    height: 393.75px;
    overflow: hidden;
    margin: auto;
`;
const Category = styled.p`
    font-size: 15px;
    text-transform: uppercase;
    color: #c6708c;
    text-decoration: none;
    text-align: center;

    padding: 15px;
    margin: 0;

    &:hover {
        color: black;
    }
`;
const Top = styled.div`
    display: inline-block;
    margin: 5px 0px 15px 0px;
`;
const CatLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
`;
const Block = styled.div`
    margin: 75px;
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


const BlogDisplay = ({category}) => {
    var sortedArticles = [...articles].sort((a, b) => b.order - a.order);

    if (category === 'the latest') {
        sortedArticles = sortedArticles.slice(0, 6);
    } else {
        sortedArticles = sortedArticles.filter(article => article.category === category);
    }
    
    return (
        <Main>
            <Group>
                <Break/>
                    <Header>Category: {category}</Header>
                <Break/>
            </Group>
            {sortedArticles.map(article => {
                if(article.category === 'video') {
                    return (
                        <Block key={article.id}>
                            <MyLink to={`/video`}>
                                <Article>
                                    <Top>
                                        <CatLink to={`/${article.category}`}><Category>{article.category}</Category></CatLink>
                                        <Date>{article.date}</Date>
                                    </Top>
    
                                    <Container>
                                        <iframe
                                            width="100%"   /* 560 */
                                            height="100%" /* 315 */
                                            src={article.src}
                                            frameborder={article.frameborder}
                                            allow={article.allow}
                                            allowfullscreen>
                                        </iframe>
                                    </Container>
    
                                    <MyLink to={article.category}>
                                        <Caption>{article.title}</Caption>
                                    </MyLink>
    
                                    <Line></Line>
    
                                    <SubCaption>{article.subtitle}</SubCaption>
    
                                </Article>
                            </MyLink>
                        </Block>
                    )
                }
                else {
                    return (
                        <Block key={article.id}>
                            <MyLink to={`/blog-post/${article.id}`}>
                                <Article>
    
                                    <Top>
                                        <CatLink to={`/${article.category}`}><Category>{article.category}</Category></CatLink>
                                        <Date>{article.date}</Date>
                                    </Top>
    
                                    <Container><CoverPhoto src={article.coverIMG} /></Container>
    
                                    <MyLink to={`/blog-post/${article.id}`}>
                                        <Caption>{article.title}</Caption>
                                    </MyLink>
    
                                    <Line></Line>
    
                                    <SubCaption>{article.subtitle}</SubCaption>
    
                                </Article>
                            </MyLink>
                        </Block>
                    )
                }
            }
            )}
        </Main >
    );
};

export default BlogDisplay;