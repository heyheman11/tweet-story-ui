import { css } from "@emotion/core";

const flexBoxCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const flexBoxCenterColumn = css`
  ${flexBoxCenter}  
  flex-direction: column;
`;


export { flexBoxCenter, flexBoxCenterColumn }