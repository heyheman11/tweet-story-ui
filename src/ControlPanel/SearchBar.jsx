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
    border: 1px solid grey;
    border-radius: 50px;
    padding: 10px;
    box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.42);
    input {
      border: none;
      width: calc(100% - 20px);
      margin: 0 10px;
      padding: 5px 0;
    }
    button {
      border: none;
      padding: 0;
      background: none;
    }
  `;

  return (
    <div className="inner" css={styleWithFlex}>
      <SearchIcon size="lg" />
      <input
        type="text"
        id="search-bar"
        name="search-bar"
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