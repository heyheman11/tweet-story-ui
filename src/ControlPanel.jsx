/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { css, keyframes } from "@emotion/core";
import { SearchIcon } from "./icons/SearchIcon";
import { flexBoxCenterColumn } from "./styles";

const SearchBar = ({ searchValue, handleInput, handleEnter, styleContext }) => {
  const styleSearchBar = css`
    ${styleContext};
    width: calc(100% - 20px);
    border: 1px solid grey;
    border-radius: 50px;
    padding: 10px;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.42);
    input {
      border: none;
      width: calc(100% - 30px);
      display: block;
      margin: 0 0 0 25px;
    }
  `;

  return (
    <div className="inner" css={styleSearchBar}>
      <SearchIcon />
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        onChange={handleInput}
        value={searchValue}
        onKeyDown={handleEnter}
      />
    </div>
  );
};

const TweetSelector = ({ twitterValues, buttonClickHandler }) => {
  const styleTweets = css`
    ${flexBoxCenterColumn};
    width: 100%;
    margin: 15px 0 0 0;
  `;

  const styleButton = css`
    background: transparent;
    border: none;
    text-align: center;
    padding: 10px;
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

const StoryTime = ({ content }) => {
  const wordArray = content.split(" ");

  const getAnimation = () => {
    const style = keyframes`
      0% {
        transform: translateX(-${Math.floor(
          Math.random() * Math.floor(400)
        )}px);
      }
      40%, 100% {
        transform: translateX(${Math.floor(Math.random() * Math.floor(400))}px);
      }
    `;
    return style;
  };

  const getWords = () => {
    return wordArray.map((item, index) => {
      return (
        <div
          key={index}
          css={css`
            animation: ${getAnimation()} 2s ease infinite;
          `}
        >
          {item}
        </div>
      );
    });
  };

  return getWords();
};

const Container = ({ children, width }) => {
  const styleContainerFlex = css`
    ${flexBoxCenterColumn};
    margin: 50px 0 0 0;
  `;

  const styleContainerWidth = css`
    max-width: ${width};
    margin: 0 15px;
  `;

  return (
    <div className="container" css={styleContainerFlex}>
      <div className="width" css={styleContainerWidth}>
        {children}
      </div>
    </div>
  );
};

const ControlPanelParent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [twitterValues, setTwitterValues] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tweet, setTweet] = useState("");

  const styleError = css`
    background-color: red;
  `;

  const handleInput = event => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleEnter = async event => {
    try {
      if (event.key === "Enter") {
        const response = await fetch(
          `http://127.0.0.1:5000/timeline/${searchValue}`
        );
        if (response.ok) {
          const values = await response.json();
          setIsError(false);
          setTwitterValues(values.text);
          if (tweet.length > 0) {
            setTweet([]);
          }
        } else {
          setIsError(true);
          setErrorMessage(`Cannot find user with name: ${searchValue}`);
          setTwitterValues([]);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getErrorMessage = () => {
    return isError ? (
      <p
        css={css`
          text-align: center;
        `}
      >
        {errorMessage}
      </p>
    ) : null;
  };

  const buttonHandler = content => {
    setTwitterValues([]);
    setTweet(content);
  };

  return (
    <Container width={"275px"}>
      <SearchBar
        searchValue={searchValue}
        handleInput={handleInput}
        handleEnter={handleEnter}
        styleContext={isError ? styleError : ""}
      />
      <TweetSelector
        twitterValues={twitterValues}
        buttonClickHandler={buttonHandler}
      />
      {getErrorMessage()}
      {tweet && tweet.length ? <StoryTime content={tweet} /> : null}
    </Container>
  );
};

export { ControlPanelParent };
