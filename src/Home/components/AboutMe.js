import React from 'react';
import PropTypes from 'prop-types';

import {
  AltSection,
  Heading,
  CenterContainer,
  MarkdownContainer,
} from '../styles';

import Loading from '../../common/Loading';

const AboutMe = ({ text = null, title = null, path = null }) => (
  (text && title && path)
    ? (
      <AltSection id={path}>
        <Heading>
          { title }
        </Heading>

        <CenterContainer>
          <MarkdownContainer source={text} />
        </CenterContainer>
      </AltSection>
    )
    : <Loading />
);

AboutMe.defaultProps = {
  text: null,
  title: null,
  path: null,
};

AboutMe.propTypes = {
  text: PropTypes.string,
  title: PropTypes.string,
  path: PropTypes.string,
};

export default AboutMe;
