import React from 'react';
import PropTypes from 'prop-types';

import {
  Heading,
  AltSection,
  Slide,
  SlideImage,
} from '../styles';

import Loading from '../../common/Loading';

import ny from '../assets/ny.jpg';
import sf from '../assets/sf.jpg';

const NYToSF = ({ title, path }) => (
  (title && path)
    ? (
      <AltSection id={path}>
        <Heading>
          { title }
        </Heading>

        <Slide>
          <SlideImage src={ny} />
          <SlideImage src={sf} />
        </Slide>
      </AltSection>
    )
    : <Loading />
);

NYToSF.defaultProps = {
  path: null,
  title: null,
};

NYToSF.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
};

export default NYToSF;
