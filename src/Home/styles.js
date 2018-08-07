import styled, { css } from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Section = styled.section`
  padding-top: 20px;
`;

export const MainSection = styled(Section)`
  background: #dddedd;
`;

export const AltSection = styled(Section)`
  margin-top: -5px;
  background: #f4f3f5;
  padding-bottom: 20px;
`;

export const Heading = styled.h1`
  margin: 0;
  margin-bottom: 15px;
  font-family: 'Space Mono', sans-serif;
  font-size: 30px;
`;

export const CenterContainer = styled.div`
  max-width: ${process.env.REACT_APP_MOBILE_BREAKPOINT - 20 * 2}px;
  padding: 0 20px;
  margin: 0 auto;

  text-align: left;
`;

export const Slide = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  overflow: hidden;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  @media(max-width: ${process.env.REACT_APP_MOBILE_BREAKPOINT}px) {
    display: block;
  }
`;

export const SlideImage = styled.img`
  width: 50%;
  height: auto;

  @media(max-width: ${process.env.REACT_APP_MOBILE_BREAKPOINT}px) {
    width: 100%;
  }
`;

export const SlideTextContainer = styled.div`
  display: flex;
  width: 50%;

  justify-content: flex-start;

  ${Slide}:nth-child(odd) & {
    justify-content: flex-end;
  }

  @media(max-width: ${process.env.REACT_APP_MOBILE_BREAKPOINT}px) {
    width: 100%;
    padding-bottom: 20px;
  }
`;

export const SlideText = styled.div`
  background-color: #f4f3f5;
  padding: 0 20px;
  width: ${768 / 2}px;
  text-align: left;

  padding-bottom: 99999px;
  margin-bottom: -99999px;

  @media(max-width: ${768}px) {
    width: 100%;
  }
`;

export const SlideHeading = styled.h2`
  text-align: center;
`;

export const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-content: center;

  border-radius: 2px;
  border: none;

  padding: 8px 16px;

  background-color: #0097a7;
  color: white;

  text-decoration: none;

  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2);

  cursor: pointer;

  :focus {
    outline: 0;
  }

  &:hover {
    box-shadow: none;
  }
`;

export const Button = styled.button`
  ${buttonStyles};
`;

export const MarkdownContainer = styled(ReactMarkdown)`
  a {
    color: #db573e;
  }
`;
