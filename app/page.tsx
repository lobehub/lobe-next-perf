'use client';

import { Button } from 'antd';
import Theme from './Theme';
import { useTheme } from 'antd-style';

export default function Home() {
  const theme = useTheme();
  return (
    <div style={{ background: theme.colorBgLayout, height: '90vh' }}>
      <div>
        <Button>按钮</Button>
      </div>
    </div>
  );
}
