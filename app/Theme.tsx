'use client';

import { ThemeAppearance, ThemeProvider } from 'antd-style';
import { useState } from 'react';

import StyleRegistry from './StyleRegistry';

const Theme = ({ children }:any) => {
  return (
    <StyleRegistry>
      <ThemeProvider theme={{ cssVar: true }}>
        {children}
      </ThemeProvider>
    </StyleRegistry>
  );
};

export default Theme;
