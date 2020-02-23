import React from "react";
import { Global, css } from "@emotion/core";
import { ControlPanel } from './ControlPanel/ControlPanel';

const App = () => {
  const globalStyle = css`
    body {
      margin: 0
    }
  `;

  return (
    <>
      <Global styles={globalStyle} />
      <ControlPanel />
    </>
  );
};

export { App };
