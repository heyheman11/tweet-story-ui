import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { SearchIcon, ExitIcon } from '../icons/SearchIcon';
import { flexBoxCenter } from '../styles';

const SearchBar = ({
  searchValue,
  handleInput,
  handleEnter,
  styleContext,
  handleClear
}) => {
  const styleWithFlex = css`
    ${styleContext};
    ${flexBoxCenter};
    position: relative;
    z-index: 5;
    border: 1px solid grey;
    border-radius: 50px;
    padding: 10px;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.42);
    background: white;
    input {
      font-family: inherit;
      font-size: 1.3em;
      border: none;
      width: calc(100% - 20px);
      margin: 0 10px;
      z-index: inherit;
    }
    button {
      border: none;
      padding: 0;
      background: none;
      z-index: inherit;
    }
  `;

  return (
    <div className="inner" css={styleWithFlex}>
      <SearchIcon size="lg" />
      <input
        type="text"
        id="search-bar"
        name="search-bar"
        placeholder="twitter handle"
        onChange={handleInput}
        value={searchValue}
        onKeyDown={handleEnter}
      />
      <button onClick={() => handleClear()}>
        <ExitIcon size="lg" />
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  searchValue: PropTypes.string,
  handleInput: PropTypes.func,
  handleEnter: PropTypes.func,
  styleContext: PropTypes.string,
  handleClear: PropTypes.func
}

export { SearchBar };