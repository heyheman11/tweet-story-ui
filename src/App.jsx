import React from "react";
import { Global, css } from "@emotion/core";
import { ControlPanelParent } from './ControlPanel';

const App = () => {
  const globalStyle = css`
    body {
      margin: 0
    }
  `;

  return (
    <>
      <Global styles={globalStyle} />
      <ControlPanelParent />
    </>
  );
};

export { App };
