import React from 'react';
import styled from 'styled-components';
import YouTube from 'react-youtube';

import {
  Heading,
  MainSection,
} from '../styles';

const FullWidthYouTube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const YouTubeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`;

export default ({ title, path }) => (
  <MainSection id={path}>
    <Heading>
      { title }
    </Heading>
    <YouTubeWrapper>
      <FullWidthYouTube
        videoId="z1VNwapOb8E"
      />
    </YouTubeWrapper>
  </MainSection>
);
