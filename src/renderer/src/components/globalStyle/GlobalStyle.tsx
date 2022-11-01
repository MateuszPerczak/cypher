import type { FC } from "react";
import { css, Global, Theme, useTheme } from "@emotion/react";
import { memo } from "react";
import poppins from "../../assets/fonts/poppins.ttf";
import fluent from "../../assets/fonts/fluent.ttf";

const GlobalStyle: FC = (): JSX.Element => {
  const { background, color, scrollbar }: Theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          /* outline: 1px solid #b6fc03aa; */
        }
        body {
          font-family: "Poppins";
          display: flex;
          background: ${background};
          color: ${color};
          height: 100vh;
          width: 100vw;
          user-select: none;
        }
        #root {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url(${fluent}) format("truetype");
        }
        @font-face {
          font-family: "Poppins";
          src: url(${poppins}) format("truetype");
        }
        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 8px;
          background-color: ${scrollbar};
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
