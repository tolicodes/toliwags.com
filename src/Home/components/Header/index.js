import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import autoBind from 'react-autobind';
import GithubCorner from 'react-github-corner';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';

import {
  FileDownload,
  Email,
} from 'styled-icons/material';

import {
  Github,
  Linkedin,
} from 'styled-icons/fa-brands';

import {
  ChalkboardTeacher,
} from 'styled-icons/fa-solid';

import {
  Button,
} from '../../styles';

import NavMenu from './NavMenu';

const ICON_SIZE = 13;

const Wrapper = styled.header`
  padding: 20px 0;
  background-color: #db573e;
`;

const MenuButton = styled.div`
  width: 60px;
  height: 45px;
  transform: scale(.7);
  transition: .5s ease-in-out;
  cursor: pointer;
  z-index: 1000;

  position: fixed;
  left: 20px;

  & span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
  }

  & span:nth-child(2), & span:nth-child(3) {
    top: 18px;
  }

  & span:nth-child(4) {
    top: 36px;
  }

  ${({ menuOpen }) => menuOpen && css`
    & span:nth-child(1) {
      top: 18px;
      width: 0%;
      left: 50%;
    }

    & span:nth-child(2) {
      transform: rotate(45deg);
    }

    & span:nth-child(3) {
      transform: rotate(-45deg);
    }

    & span:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  `}
`;

const Title = styled.h1`
  font-family: 'Space Mono', sans-serif;
  margin: 0;
  font-size: 40px;
`;

const Subtitle = styled.h4`
  font-family: 'Space Mono', sans-serif;
  margin: 0;
  font-size: 16px;
`;

const Links = styled.div`
  font-size: 12px;
  margin: 0 20px;
  margin-top: 20px;

  display: flex;
`;

const Link = styled(Button.withComponent('a'))`
  flex: 1;

  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;

const LinkLabel = styled.span`
  display: inline-block;
  margin-left: 5px;

  @media(max-width: ${process.env.REACT_APP_MOBILE_BREAKPOINT}px) {
    display: none;
  }
`;

export default class Header extends Component {
  constructor() {
    super();

    this.state = {
      menuOpen: false,
    };

    autoBind(this);
  }

  onClickMenuButton() {
    const { onMenuToggle } = this.props;

    this.setState(({ menuOpen }) => ({
      menuOpen: !menuOpen,
    }), () => {
      const { menuOpen } = this.state;
      onMenuToggle(menuOpen);
    });
  }

  render() {
    const {
      menuOpen,
    } = this.state;

    const {
      nav,
    } = this.props;

    return (
      <Wrapper>
        <GithubCorner
          data-place="left"
          data-tip="View the Source Code for this site on GitHub!"
          href="https://github.com/tolicodes/tolicodes.com"
        />

        <ReactTooltip />

        <NavMenu isOpen={menuOpen} onHide={this.onClickMenuButton} nav={nav} />

        <MenuButton onClick={this.onClickMenuButton} menuOpen={menuOpen}>
          <span />
          <span />
          <span />
          <span />
        </MenuButton>

        <Title>
          @tolicodes
        </Title>
        <Subtitle>
          Anatoliy D. Zaslavskiy
        </Subtitle>
        <Links>
          <Link href="/resume.pdf">
            <FileDownload size={ICON_SIZE} />
            <LinkLabel>
              Resume
            </LinkLabel>
          </Link>

          <Link href="http://github.com/tolicodes" target="_blank">
            <Github size={ICON_SIZE} />
            <LinkLabel>
              Github
            </LinkLabel>
          </Link>

          <Link href="http://linkedin.com/in/tolicodes" target="_blank">
            <Linkedin size={ICON_SIZE} />
            <LinkLabel>
              LinkedIn
            </LinkLabel>
          </Link>

          <Link
            href="https://www.codementor.io/tolicodes/reviews"
            target="_blank"
            data-tip="Read what real clients have to say about me"
          >
            <ChalkboardTeacher size={ICON_SIZE} />
            <LinkLabel>
              CodeMentor
            </LinkLabel>
          </Link>

          <Link href="mailto:toli@tolicodes.com" target="_blank">
            <Email size={ICON_SIZE} />
            <LinkLabel>
              toli@tolicodes.com
            </LinkLabel>
          </Link>
        </Links>
      </Wrapper>
    );
  }
}

Header.propTypes = {
  nav: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,

  onMenuToggle: PropTypes.func.isRequired,
};
