"use client";

import { Button, Segmented, Divider } from "antd";
import Theme from "./Theme";
import { useTheme, useThemeMode } from "antd-style";

const options = [
  { label: "亮色", value: "light" },
  { label: "暗色", value: "dark" },
];

export default function Home() {
  const theme = useTheme();
  const { appearance, setAppearance } = useThemeMode();
  return (
    <div style={{ background: theme.colorBgLayout, height: "90vh" }}>
      <div>
        <Segmented
          onChange={(v) => setAppearance(v as any)}
          options={options}
        />
      </div>
      <Divider />
      <div>
        <Button>按钮</Button>
      </div>
    </div>
  );
}
