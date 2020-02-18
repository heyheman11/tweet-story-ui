import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const SearchIcon = () => {
  return <FontAwesomeIcon icon={faSearch} css={{ position: "absolute"}}/>;
}


export { SearchIcon };