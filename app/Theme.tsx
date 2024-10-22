'use client';

import { ThemeAppearance, ThemeProvider } from 'antd-style';
import { useState } from 'react';

import { Segmented, Divider } from 'antd';

import StyleRegistry from './StyleRegistry';

const options = [
  { label: '亮色', value: 'light' },
  { label: '暗色', value: 'dark' },
];

const Theme = ({ children }:any) => {
  const [appearance, setTheme] = useState<ThemeAppearance>('light');

  return (
    <StyleRegistry>
      <ThemeProvider theme={{ cssVar: true }} appearance={appearance}>
      <div>
        <Segmented
          onChange={(v) => setTheme(v as ThemeAppearance)}
          options={options}
        />
      </div>
      <Divider />
        {children}
      </ThemeProvider>
    </StyleRegistry>
  );
};

export default Theme;
