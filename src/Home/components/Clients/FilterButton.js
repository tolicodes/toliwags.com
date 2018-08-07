import React, { Component } from 'react';
import autoBind from 'react-autobind';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { Button } from '../../styles';

const FilterButtonComponent = styled(Button)`
  margin-right: 10px;

  min-width: 124px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  border: 1px solid #0097a7;

  ${({ isOff }) => isOff && css`
    background-color: transparent;
    color: black;
  `})
`;

export default class FilterButton extends Component {
  constructor() {
    super();
    autoBind(this);
  }

  onClick() {
    const {
      tag,
      type,
      onClick,
    } = this.props;
    onClick(type, tag);
  }

  render() {
    const { tag, isOff } = this.props;
    return (
      <FilterButtonComponent onClick={this.onClick} isOff={isOff}>
        {tag}
      </FilterButtonComponent>
    );
  }
}

FilterButton.propTypes = {
  tag: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['tag', 'tech', 'industry']).isRequired,
  onClick: PropTypes.func.isRequired,

  isOff: PropTypes.bool.isRequired,
};
