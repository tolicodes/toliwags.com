import React from 'react';
import styled, { css } from 'styled-components';
import Scrollchor from 'react-scrollchor';
import PropTypes from 'prop-types';

import {
  Youtube,
} from 'styled-icons/fa-brands';

import {
  QuestionCircle,
} from 'styled-icons/fa-regular';

import {
  LocationCity,
  Work,
} from 'styled-icons/material';

import {
  BasketballBall,
} from 'styled-icons/fa-solid';

import { buttonStyles } from '../../styles';
import Loading from '../../../common/Loading';

const ICONS = {
  youtube: Youtube,
  question: QuestionCircle,
  building: LocationCity,
  work: Work,
  ball: BasketballBall,
};

const Wrapper = styled.div`
  background: #006978;
  position: fixed;
  top: 0;
  bottom: 0;
  left: -100%;
  z-index: 1;
  padding: 10px;

  transition: .5s ease-in;
  width: 280px;

  ${({ isOpen }) => css`
    left: ${isOpen ? 0 : '-300px;'};
  `}

  @media (max-width: ${process.env.REACT_APP_MOBILE_BREAKPOINT}px) {
    width: calc(100% - 20px);

    ${({ isOpen }) => css`
      left: ${isOpen ? 0 : '100%;'};
    `}
  }
`;

const SidebarLink = styled(Scrollchor)`
  ${buttonStyles}

  color: black;
  background-color: #db573e;
  text-decoration: none;

  margin-bottom: 10px;
`;

const NavLabel = styled.span`
  margin-left: 5px;
`;

const ICON_SIZE = 14;

const NavMenu = ({ onHide, isOpen, nav = [] }) => (
  nav
    ? (
      <Wrapper onClick={onHide} isOpen={isOpen}>
        {
        nav.map(({ title, path, icon }) => {
          const Icon = ICONS[icon];

          return (
            <SidebarLink to={path} key={path}>
              <Icon size={ICON_SIZE} />
              <NavLabel>
                { title }
              </NavLabel>
            </SidebarLink>
          );
        })
      }
      </Wrapper>
    )
    : <Loading />
);

NavMenu.propTypes = {
  onHide: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  nav: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
    icon: PropTypes.string,
  })).isRequired,
};

export default NavMenu;
