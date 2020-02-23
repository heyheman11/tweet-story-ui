import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { flexBoxCenterColumn } from '../styles';

const TweetPicker = ({ twitterValues, buttonClickHandler }) => {
  const styleTweets = css`
    ${flexBoxCenterColumn};
    margin: 15px 0 0 0;
  `;

  const styleButton = css`
    background: transparent;
    border: none;
    text-align: center;
    padding: 10px;
    word-break: break-word;
    &:hover {
      background-color: #c3d3e0;
      cursor: pointer;
    }
  `;

  const getTweets = () => {
    if (twitterValues.length > 0) {
      return twitterValues.map((content, index) => (
        <div
          key={index}
          css={styleButton}
          onClick={() => buttonClickHandler(content)}
        >
          {content}
        </div>
      ));
    } else {
      return null;
    }
  };

  return <div css={styleTweets}>{getTweets()}</div>;
};


TweetPicker.propTypes = {
  twitterValues: PropTypes.array,
  buttonClickHandler: PropTypes.func
}

export { TweetPicker };