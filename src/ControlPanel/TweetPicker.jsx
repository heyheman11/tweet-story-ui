import React from "react";
import PropTypes from "prop-types";
import { css, keyframes } from "@emotion/core";
import { flexBoxCenterColumn } from "../styles";

const TweetPicker = ({ twitterValues, buttonClickHandler }) => {
  const styleTweets = css`
    ${flexBoxCenterColumn};
    margin: 15px 0 0 0;
  `;

  const animation = keyframes`
    from {
      transform: translateY(-100px);
    }

    to {
      transform: translateY(0);

    }
  `;

  const styleButton = index => {
    return css`
      background: darkseagreen;
      border: none;
      text-align: center;
      padding: 10px;
      word-break: break-word;
      margin: 0 0 5px 0;
      box-shadow: 0 -5px 10px 0 rgba(0, 0, 0, 0.16);
      z-index: 0;
      animation: ${animation} ${0.5 + (0.3 / (index + 1))}s ease;
      &:hover {
        background: darkolivegreen;
        cursor: pointer;
      }
    `;
  };

  const getTweets = () => {
    if (twitterValues.length > 0) {
      return (
        <div css={styleTweets}>
          {twitterValues.map((content, index) => (
            <div
              key={index}
              css={styleButton(index)}
              onClick={() => buttonClickHandler(content)}
            >
              {content}
            </div>
          ))}
        </div>
      );
    } else {
      return null;
    }
  };

  return getTweets();
};

TweetPicker.propTypes = {
  twitterValues: PropTypes.array,
  buttonClickHandler: PropTypes.func
};

export { TweetPicker };
