import { css, Global, Theme, useTheme } from "@emotion/react";
import { memo } from "react";
import type { FC } from "react";

const GlobalStyle: FC = (): JSX.Element => {
  const { background, color, scrollbar, accent }: Theme = useTheme();
  console.log(background, color, scrollbar, accent);
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          font-family: "Poppins", sans-serif;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background-color: ${background};
          color: ${color};
          user-select: none;
          height: 100vh;
        }
        #root {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          gap: 10px;
        }
        @font-face {
          font-family: "Segoe Fluent Icons";
          src: url("./fonts/Segoe Fluent Icons.ttf") format("truetype");
        }
        @font-face {
          font-family: "Poppins";
          src: url("./fonts/Poppins.ttf") format("truetype");
        }
      `}
    />
  );
};

export default memo(GlobalStyle);
