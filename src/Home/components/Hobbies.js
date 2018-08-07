import React from 'react';
import PropTypes from 'prop-types';

import {
  Heading,
  MainSection,
  Slide,
  SlideImage,
  SlideTextContainer,
  SlideText,
  SlideHeading,
} from '../styles';

import Loading from '../../common/Loading';

import hiking from '../assets/hiking.jpg';
import aspergersSpeech from '../assets/aspergers_speech.jpg';
import bidawee from '../assets/bidawee.jpg';
import acro from '../assets/acro.jpg';
import biking from '../assets/biking.jpg';
import toastmasters from '../assets/toastmasters.jpg';
import meAndRocks from '../assets/me_and_rocks.jpg';

const Hobbies = ({ title, path }) => (
  (title && path)
    ? (
      <MainSection id={path}>
        <Heading>
          { title }
        </Heading>

        <Slide>
          <SlideImage src={hiking} />

          <SlideTextContainer>
            <SlideText>
              <SlideHeading>
                Nature
              </SlideHeading>
              I love being out in nature
            </SlideText>
          </SlideTextContainer>
        </Slide>

        <Slide>
          <SlideImage src={aspergersSpeech} />

          <SlideTextContainer>
            <SlideText>
              <SlideHeading>
                Mental Health Education
              </SlideHeading>

              As someone afflicted by Aspergers and Bipolar Disorder I am
              passionate about helping promote a positive image of mental
              health and promoting education on dealing with these conditions.
            </SlideText>
          </SlideTextContainer>
        </Slide>

        <Slide>
          <SlideImage src={bidawee} />

          <SlideTextContainer>
            <SlideText>
              <SlideHeading>
                Animal Welfare
              </SlideHeading>

              I am a big supporter on Animal Right and Animal welfare.
              I am involved with/volunteer with many organizations
              promoting animal welfare including BARC, Animal Haven,
              and Bidawee.

            </SlideText>
          </SlideTextContainer>
        </Slide>

        <Slide>
          <SlideImage src={acro} />

          <SlideTextContainer>
            <SlideText>
              <SlideHeading>
            AcroYoga
              </SlideHeading>
          A mix of acrobatics and yoga.

            </SlideText>
          </SlideTextContainer>


        </Slide>

        <Slide>
          <SlideImage src={biking} />

          <SlideTextContainer>
            <SlideText>
              <SlideHeading>
            Biking
              </SlideHeading>
          I bike everywhere.

            </SlideText>
          </SlideTextContainer>
        </Slide>

        <Slide>
          <SlideImage src={toastmasters} />

          <SlideTextContainer>
            <SlideText>
              <SlideHeading>
            ToastMasters
              </SlideHeading>

              I am aiming to become a great public speaker.
              ToastMasters is a weekly club that allows members
              to practice speaking, with constructive feedback.

            </SlideText>
          </SlideTextContainer>
        </Slide>

        <Slide>
          <SlideImage src={meAndRocks} />

          <SlideTextContainer>
            <SlideText>
              <SlideHeading>
                Dogs
              </SlideHeading>
              I love dogs!

            </SlideText>
          </SlideTextContainer>
        </Slide>
      </MainSection>
    )
    : <Loading />

);

Hobbies.defaultProps = {
  path: null,
  title: null,
};

Hobbies.propTypes = {
  path: PropTypes.string,
  title: PropTypes.string,
};

export default Hobbies;
