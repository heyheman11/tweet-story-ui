import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import { flexBoxCenterColumn } from '../styles';

const Container = ({ children, width }) => {
  const styleContainerFlex = css`
    ${flexBoxCenterColumn};
    margin: 50px 15px;
  `;

  const styleContainerWidth = css`
    max-width: ${width};
    width: 100%;
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

Container.propTypes = {
  children: PropTypes.node,
  width: PropTypes.string
}

export { Container };