import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';


const SearchIcon = (props) => {
  return <FontAwesomeIcon icon={faSearch} {...props} />;
}

const ExitIcon = (props) => {
  return <FontAwesomeIcon icon={faTimes} {...props} />; 
}


export { ExitIcon, SearchIcon };