import React, { useState } from 'react';
import { css } from '@emotion/core';
import { Container } from '../Components/Container';
import { TweetPicker } from './TweetPicker';
import { StoryTime } from './StoryTime';
import { SearchBar } from './SearchBar';


const ControlPanel = () => {
  const [searchValue, setSearchValue] = useState("");
  const [twitterValues, setTwitterValues] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedTweet, setSelectedTweet] = useState("");

  const styleError = css`
    background-color: red;
  `;

  const handleSearchInput = event => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleSearchPress = async event => {
    try {
      if (event.key === "Enter" && searchValue.length > 0) {
        const response = await fetch(
          `http://127.0.0.1:5000/timeline/${searchValue}`
        );
        if (response.ok) {
          const values = await response.json();
          setIsError(false);
          setTwitterValues(values.text);
          if (selectedTweet.length > 0) {
            setSelectedTweet([]);
          }
        } else {
          setIsError(true);
          setErrorMessage(`Cannot find user with name: ${searchValue}`);
          setTwitterValues([]);
        }
      } else {
        return;
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
    setSelectedTweet(content);
  };

  const handleClearButtonClick = () => {
    if (twitterValues.length > 0) {
      setTwitterValues([]);
    }
    if (searchValue.length > 0) {
      setSearchValue("");
    }
    if (selectedTweet) {
      setSelectedTweet("");
    }
  };

  return (
    <Container width={"275px"}>
      <SearchBar
        searchValue={searchValue}
        handleInput={handleSearchInput}
        handleEnter={handleSearchPress}
        handleClear={handleClearButtonClick}
        styleContext={isError ? styleError : ""}
      />
      <TweetPicker
        twitterValues={twitterValues}
        buttonClickHandler={buttonHandler}
      />
      {getErrorMessage()}
      {selectedTweet && selectedTweet.length ? (
        <StoryTime content={selectedTweet} />
      ) : null}
    </Container>
  );
};

export { ControlPanel };