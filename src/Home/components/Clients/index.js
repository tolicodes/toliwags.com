import React from 'react';
import styled, { css } from 'styled-components';
import { intersection } from 'lodash';
import PropTypes from 'prop-types';

import {
  Heading,
  MainSection,
} from '../../styles';

import FilterClientsButtons, { FILTER_TYPES } from './FilterClientsButtons';
import Loading from '../../../common/Loading';

const Logos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

const LogoLink = styled.a`
  margin-bottom: 20px;
  margin-right: 20px;
  cursor: pointer;
  width: 150px;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: width 1s;

  ${({ isShown }) => !isShown && css`
    width: 0;
    display: none;
  `}
`;

const LogoImage = styled.img`
  max-height: 50px;
  max-width: 150px;
  cursor: pointer;
`;

function isClientShown(clientFilters, tags) {
  return Object.keys(FILTER_TYPES).reduce((shown, filterType) => {
    if (!shown) return false;

    return (
      !clientFilters[filterType].length
      || intersection(clientFilters[filterType], tags[filterType]).length
    );
  }, true);
}

const Clients = ({
  clients,
  title,
  path,
  filterClients,
  clientFilters,
}) => (
  (clients && title && path)
    ? (
      <MainSection id={path}>
        <Heading>
          { title }
        </Heading>

        <FilterClientsButtons
          clients={clients}
          filterClients={filterClients}
          clientFilters={clientFilters}
        />

        <Logos>
          {clients && clientFilters
            ? clients.map(({ img, url, ...filters }) => (
              <LogoLink
                href={url}
                target="_blank"
                key={url}
                isShown={isClientShown(clientFilters, filters)}
              >
                <LogoImage src={img} />
              </LogoLink>
            ))
            : (
              <div>
              Loading..
              </div>
            )
        }
        </Logos>
      </MainSection>
    )
    : <Loading />
);

Clients.defaultProps = {
  clients: null,
  title: null,
  path: null,
};

Clients.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.string),
    industry: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
  })),
  title: PropTypes.string,
  path: PropTypes.string,
  clientFilters: PropTypes.shape({
    tag: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
    industry: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  filterClients: PropTypes.func.isRequired,
};

export default Clients;
