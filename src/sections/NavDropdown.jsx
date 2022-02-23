/*
 * NAV HEADER SECTION
 * used at the top of all pages with a width
 * larger than 500px
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
  opacity: 0.7;
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
  width: 60px;
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

const NavDropdown = ({ className }) => {
  //checking the current path to see if on a page in nav
  const isHome = useRouteMatch({ path: '/', exact: true });
  const isTravel = useRouteMatch({ path: '/travel', exact: true });
  const isWrite = useRouteMatch({ path: '/write', exact: true });
  const isPhotography = useRouteMatch({ path: '/photography', exact: true });
  const isVideo = useRouteMatch({ path: '/video', exact: true });

  return (
    <Main className={className}>
      <NavBar>
        <MenuUl>
          <MenuOption>
            menu
            <Dropdown>
              <DropdownOption>
                <MyLink className={isTravel ? 'active' : ''} to="/travel">
                  Travel
                </MyLink>
              </DropdownOption>

              <DropdownOption>
                <MyLink className={isWrite ? 'active' : ''} to="/write">
                  Write
                </MyLink>
              </DropdownOption>

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
            socials
            <Dropdown>
              <DropdownOption>
                <ExternalLink
                  href="https://www.instagram.com/lilygostovic/"
                  target="_blank"
                >
                  Instagram
                </ExternalLink>
              </DropdownOption>

              <DropdownOption>
                <ExternalLink
                  href="https://www.strava.com/athletes/24507964"
                  target="_blank"
                >
                  Strava
                </ExternalLink>
              </DropdownOption>

              <DropdownOption>
                <ExternalLink href="spotify:user:lilygostovic" target="_blank">
                  Spotify
                </ExternalLink>
              </DropdownOption>
            </Dropdown>
          </MenuOption>
        </Socials>

        {/* <MenuUl>
          <MenuOption>
            Quicklinks
            <Dropdown>
              <DropdownOption>
                <MyLink className={isHome ? 'active' : ''} to="/">
                  Home
                </MyLink>
              </DropdownOption>

              <DropdownOption>
                <MyLink className={isTravel ? 'active' : ''} to="/travel">
                  Travel
                </MyLink>
              </DropdownOption>

              <DropdownOption>
                <MyLink className={isWrite ? 'active' : ''} to="/write">
                  Write
                </MyLink>
              </DropdownOption>

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
            external links
            <Dropdown>
              <DropdownOption>
                <ExternalLink
                  href="https://www.instagram.com/lilygostovic/"
                  target="_blank"
                >
                  Instagram
                </ExternalLink>
              </DropdownOption>

              <DropdownOption>
                <ExternalLink
                  href="https://www.strava.com/athletes/24507964"
                  target="_blank"
                >
                  Strava
                </ExternalLink>
              </DropdownOption>

              <DropdownOption>
                <ExternalLink href="spotify:user:lilygostovic" target="_blank">
                  Spotify
                </ExternalLink>
              </DropdownOption>
            </Dropdown>
          </MenuOption>
        </Socials> */}
      </NavBar>
    </Main>
  );
};

export default NavDropdown;
