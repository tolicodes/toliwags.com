import styled from 'styled-components';
import React from 'react';
import { chain } from 'lodash';
import PropTypes from 'prop-types';

import {
  CenterContainer,
} from '../../styles';

import FilterButton from './FilterButton';

const Wrapper = styled.div`
  margin-bottom: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  margin-bottom: 20px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 10px;

  overflow-x: scroll;

  /* width */
  ::-webkit-scrollbar {
      width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
      background: #888;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #0097a7;
    cursor: pointer;
  }
`;

const Title = styled.strong`
  margin-bottom: 10px;
`;

export const FILTER_TYPES = {
  tech: 'Tech',
  tag: 'Type',
  industry: 'Industry',
};

const extractTagList = (clients, filterType) => (
  chain(clients)
    .map(filterType)
    .flatten()
    .compact()
    .countBy()
    .toPairs()
    .sortBy(([, count]) => -count)
    .map(([tag]) => tag)
    .value()
);

const FilterClientsButtons = ({
  clients,
  filterClients,
  clientFilters,
}) => {
  if (!clientFilters || !clients) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  return (
    <Wrapper>
      <CenterContainer>
        {
          Object.entries(FILTER_TYPES).map(([filterType, label]) => (
            <Container key={filterType}>
              <Title>
                Filter by
                {' '}
                {label}
                {' '}
                (Scroll):
              </Title>

              <ButtonsContainer>
                {extractTagList(clients, filterType).map(tag => (
                  <FilterButton
                    key={tag}
                    tag={tag}
                    type={filterType}
                    isOff={(
                      !!clientFilters[filterType].length
                      && !clientFilters[filterType].includes(tag)
                    )}
                    onClick={filterClients}
                  />
                ))}
              </ButtonsContainer>
            </Container>
          ))
        }
      </CenterContainer>
    </Wrapper>
  );
};

FilterClientsButtons.propTypes = {
  clients: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tag: PropTypes.arrayOf(PropTypes.string),
    industry: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,

  clientFilters: PropTypes.shape({
    tag: PropTypes.arrayOf(PropTypes.string),
    tech: PropTypes.arrayOf(PropTypes.string),
    industry: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  filterClients: PropTypes.func.isRequired,
};

export default FilterClientsButtons;
