import React, { Component } from 'react';

import {
  Heading,
  MainSection,
} from '../styles';

export default class Schedule extends Component {
  static addScript(src, callback) {
    const s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = callback;
    document.body.appendChild(s);
  }

  componentWillMount() {
    Schedule.addScript('https://assets.calendly.com/assets/external/widget.js');
  }

  render() {
    return (
      <MainSection>
        <Heading>
          Schedule a Meeting With Me
        </Heading>

        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/tolicodes"
          style={{
            minWidth: 320,
            height: 800,
          }}
        />
      </MainSection>
    );
  }
}
