/*
 * NAV SECTION
 * to be used at the top of all pages
 * navigation bar
 */

import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const Main = styled.div`
  font-family: 'Lora', serif;
`;
const NavBar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  z-index: 10;
  opacity: 0.9;
  box-shadow: 0 2px 5px -2px rgba(240, 240, 240, 0.5);
`;
const MenuUl = styled.ul`
  padding: 0px 15px;
  margin: 0;
  text-transform: lowercase;
  color: black;
`;
const Dropdown = styled.ul`
  margin: 0;
  padding: 0;
  display: none;
  text-align: center;
  width: 100%;
  position: absolute;
  left: 0%;
  top: 100%;
  box-shadow: 0 2px 5px -2px rgba(240, 240, 240, 0.5);
`;
const DropdownOption = styled.li`
  display: block;
  font-size: 13.5px;
  background-color: #f0f0f0;
  padding: 12px;
  color: black;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: lowercase;
  transition: all 0.5s ease;
  &.active {
    color: #c6708c;
    font-weight: 0;
  }
  &:hover {
    color: #c6708c;
  }
`;
const Socials = styled.ul`
  display: inline;
  text-align: right;
  margin: 0;
  padding: 0px 15px;
`;
const ExternalLink = styled.a`
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 12px;
  transition: all 0.5s ease;
  &:hover {
    color: #c6708c;
  }
`;
const MenuOption = styled.li`
  display: inline-block;
  margin: 0px 5px;
  padding: 20px 15px;
  font-size: 13.5px;
  transition: all 0.5s ease;
  position: relative;

  &:hover {
    color: #c6708c;
    font-weight: 0;
    ${Dropdown} {
      display: block;
    }
  }
`;

const Nav = () => {
  //checking the current path to see if on a page in nav
  const isHome = useRouteMatch({ path: '/', exact: true });
  const isTravel = useRouteMatch({ path: '/travel', exact: true });
  const isWrite = useRouteMatch({ path: '/write', exact: true });
  const isPhotography = useRouteMatch({ path: '/photography', exact: true });
  const isFilm = useRouteMatch({ path: '/film', exact: true });
  const isVideo = useRouteMatch({ path: '/video', exact: true });
  const isMusic = useRouteMatch({ path: '/music', exact: true });

  return (
    <Main>
      <NavBar>
        <MenuUl>
          <MenuOption>
            <MyLink className={isHome ? 'active' : ''} to="/">
              Home
            </MyLink>
          </MenuOption>

          <MenuOption>
            <MyLink className={isTravel ? 'active' : ''} to="/travel">
              Travel
            </MyLink>
          </MenuOption>

          <MenuOption>
            <MyLink className={isWrite ? 'active' : ''} to="/write">
              Write
            </MyLink>
          </MenuOption>

          <MenuOption>
            Through A Lens {/* through a lens */}
            <Dropdown>
              <DropdownOption>
                <MyLink className={isVideo ? 'active' : ''} to="/video">
                  Video
                </MyLink>
              </DropdownOption>

              <DropdownOption>
                <MyLink
                  className={isPhotography ? 'active' : ''}
                  to="/photography"
                >
                  Photography
                </MyLink>
              </DropdownOption>
            </Dropdown>
          </MenuOption>
        </MenuUl>

        <Socials>
          <MenuOption>
            <ExternalLink
              href="https://github.com/lilygostovic"
              target="_blank"
            >
              GitHub
            </ExternalLink>
          </MenuOption>

          <MenuOption>
            <ExternalLink
              href="https://www.linkedin.com/in/lily-gostovic-5b9243204/"
              target="_blank"
            >
              LinkedIn
            </ExternalLink>
          </MenuOption>

          <MenuOption>
            <ExternalLink
              href="https://www.instagram.com/lilygostovic/"
              target="_blank"
            >
              Instagram
            </ExternalLink>
          </MenuOption>

          <MenuOption>
            <ExternalLink href="spotify:user:lilygostovic" target="_blank">
              Spotify
            </ExternalLink>
          </MenuOption>
        </Socials>
      </NavBar>
    </Main>
  );
};

export default Nav;
