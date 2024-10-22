'use client';

import { ThemeAppearance, ThemeProvider } from 'antd-style';
import { useState } from 'react';

import { Segmented, Divider } from 'antd';

import StyleRegistry from './StyleRegistry';

const options = [
  { label: '亮色', value: 'light' },
  { label: '暗色', value: 'dark' },
];

export default ({ children }) => {
  const [appearance, setTheme] = useState<ThemeAppearance>('light');

  return (
    <StyleRegistry>
      <div>
        <Segmented
          onChange={(v) => setTheme(v as ThemeAppearance)}
          options={options}
        />
      </div>
      <Divider />
      <ThemeProvider theme={{ cssVar: true }} appearance={appearance}>
        {children}
      </ThemeProvider>
    </StyleRegistry>
  );
};
