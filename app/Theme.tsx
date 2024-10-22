"use client";

import { ThemeProvider } from "antd-style";

import StyleRegistry from "./StyleRegistry";

const Theme = ({ children }: any) => {
  return (
    <StyleRegistry>
      <ThemeProvider theme={{ cssVar: true }}>{children}</ThemeProvider>
    </StyleRegistry>
  );
};

export default Theme;
