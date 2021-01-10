import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import Nav from '../sections/Nav';
import BackToTop from '../sections/BackToTop';
import Spacing from '../sections/Spacing';
import articles from '../data/articles.json';


const Main = styled.div`
    font-family: 'Lora', serif;
`;
const Header = styled.h1`
    color: black;
    font-size: 40px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    text-transform: uppercase;
    margin: 20px 20% 20px 20%;
    /* top right bottom left */
`;
const Center = styled.div`
    text-align: center;
    justify-content: center;
`;
const Container = styled.div`
    opacity: 0.9;
    height: 350px;
    width: 900px;
    margin: auto;
`;
const MainPic = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`;
const Greeting = styled.p`
    color: #c6708c;
    margin: 50px 25% 75px 25%;
    text-align: center;
    line-height: 1.5;
`;
const Text = styled.p`
    margin: 50px 17%;
    line-height: 2;
`;
const TextLine = styled.p`
    line-height: 2;
    font-size: 17px;
    margin: 0;
    padding: 0;
`;
const Category = styled.p`
font-size: 15px;
text-transform: uppercase;
color: #c6708c;
text-decoration: none;
text-align: center;

padding: 15px;
margin: 100px 0px 0px 0px;

&:hover {
    color: black;
}
`;
const CatLink = styled(Link)`
    text-decoration: none;
    display: inline-block;
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
        color:  #989898;
    }
`;
const FromLily = styled.p`
    color: #989898;
    font-size: 13px;
    display: inline-block;
    text-transform: uppercase;
`;
const Line = styled.hr`
    border-top: 0.5px solid black;
    width: 17%;
    margin-top: 20px;
    margin-bottom: 20px;

`;

const BlogPost = ({ match }) => {
    window.scrollTo(0, 0);
    
    //getting id from the path
    const id = match.params.id;

    //finding article by id
    const article = articles.find(article => article.id === id); //callback function

    //default page in case of error
    if (!article) {
        return <div>Not Found...</div>;
    }

    const paragraphs = article.text.split('|');

    return (
        <Main>
            <Nav></Nav>

            <Center>
                <CatLink to={`/${article.category}`}><Category>{article.category}</Category></CatLink>
                <Header>{article.title}</Header>

                <Top>
                    <Line></Line>
                    <Date>{article.date}</Date>
                    <FromLily>
                        From <MyLink to={`/`}>Lily's Diaries</MyLink>
                    </FromLily>
                </Top>
                
                <Container>
                    <MainPic src={article.fullIMG} />
                </Container>

                <Greeting>{article.subtitle}</Greeting>
            </Center>

            

            {paragraphs.map(paragraph => {
                const lines = paragraph.split("\n");
                return (
                    <Text>
                        {
                            lines.map(line => {
                                return (
                                    <TextLine>
                                        {line}
                                    </TextLine>
                                )
                            })
                        }
                    </Text>)

            }
            )}

            <BackToTop/>

            <Spacing/>
        </Main >
    );
};

export default BlogPost;