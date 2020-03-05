import React from "react";
import { Global, css } from "@emotion/core";
import { ControlPanel } from "./ControlPanel/ControlPanel";

const App = () => {
  const globalStyle = css`
    body {
      @import url("https://fonts.googleapis.com/css?family=Muli&display=swap");
      font-family: "Muli";
      margin: 0;
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
