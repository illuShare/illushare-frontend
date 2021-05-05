import { css, Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

export const globalStyles = (
  <Global
    styles={css`
      ${emotionNormalize}
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }

      button {
        background-color: inherit;
        border: none;
        outline: none;
        cursor: pointer;
      }

      li {
        list-style: none;
      }
    `}
  />
);

export default null;
