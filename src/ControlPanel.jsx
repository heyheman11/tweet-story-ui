import React, { useState } from "react";
import { css } from "@emotion/core";
import { SearchIcon } from "./icons/SearchIcon";
import { flexBoxCenterColumn } from "./styles";

// eslint-disable-next-line react/prop-types
const InputChild = ({ type, id, name, value, handleInput, handleKeyDown }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      onChange={handleInput}
      value={value}
      onKeyDown={handleKeyDown}
    />
  );
};

// eslint-disable-next-line react/prop-types
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
      <InputChild
        type="text"
        id="search-bar"
        name="search-bar"
        value={searchValue}
        handleInput={handleInput}
        handleKeyDown={handleEnter}
      />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const TweetSelector = ({ twitterValues, buttonClickHandler }) => {
  const styleTweets = css`
    ${flexBoxCenterColumn};
    width: 100%;
    margin: 15px 0 0 0;
  `;

  const styleButton = css`
    margin: 10px 0 0 0;
    background: transparent;
    border: 1px solid grey;
    text-align: center;
    padding: 10px;
    &:hover {
      cursor: pointer;
    }
  `;

  const getTweets = () => {
    // eslint-disable-next-line react/prop-types
    if (twitterValues.length > 0) {
      // eslint-disable-next-line react/prop-types
      return twitterValues.map((content, index) => (
        <button
          key={index}
          className="tweet-row"
          css={styleButton}
          onClick={() => buttonClickHandler(content)}
        >
          {content}
        </button>
      ));
    } else {
      return null;
    }
  };

  return (
    <div className="container-tweets" css={styleTweets}>
      {getTweets()}
    </div>
  );
};

const ControlPanelParent = () => {
  const [searchValue, setSearchValue] = useState("");
  const [twitterValues, setTwitterValues] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

  // eslint-disable-next-line no-unused-vars
  const buttonHandler = content => {
    console.log(content);
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
    </Container>
  );
};

export { ControlPanelParent };

// eslint-disable-next-line react/prop-types
const Container = ({ children, width }) => {
  const styleContainerFlex = css`
    ${flexBoxCenterColumn};
    margin: 50px 0 0 0;
  `;

  const styleContainerWidth = css`
    width: ${width};
  `;

  return (
    <div className="container" css={styleContainerFlex}>
      <div className="width" css={styleContainerWidth}>
        {children}
      </div>
    </div>
  );
};
