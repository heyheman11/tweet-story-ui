import React from "react";
import { css, keyframes } from "@emotion/core";

const StoryTime = ({ content }) => {
  const wordArray = content.split(" ");

  const getAnimation = () => {
    return keyframes`
      0% {
        transform: translateX(-${Math.floor(
          Math.random() * Math.floor(200)
        )}px);
      }
      40%, 100% {
        transform: translateX(${Math.floor(Math.random() * Math.floor(200))}px);
      }
    `;
  };

  const themes = {
    0: ["#01558C", "#04708D", "#048B7E", "#09A67B", "#05BF7D"],
    1: ["#FFCA82", "#E8A776", "#FFB090", "#E88676", "#FF8286"]
  };

  const getBackgroundColor = () => {
    return themes[Math.floor(Math.random() * 2)][Math.floor(Math.random() * 5)]
  };
  const getWords = () => {
    return wordArray.map((item, index) => {
      return (
        <div
          key={index}
          css={css`
            animation: ${getAnimation()} 2s ease infinite;
            padding: 10px;
            text-align: center;
            background: ${getBackgroundColor()};
          `}
        >
          {item}
        </div>
      );
    });
  };

  return getWords();
};

export { StoryTime };
