"use client";

import {
  Button,
  Segmented,
  Divider,
  message,
  ConfigProvider,
  theme as antdTheme,
} from "antd";
import { useThemeMode } from "antd-style";

const options = [
  { label: "亮色", value: "light" },
  { label: "暗色", value: "dark" },
];

export default function Home() {
  const { appearance, setAppearance } = useThemeMode();
  const { token } = antdTheme.useToken();
  return (
    <ConfigProvider
      theme={{
        cssVar: true,
        algorithm: appearance === "dark" ? antdTheme.darkAlgorithm : undefined,
      }}
    >
      <div style={{ background: token.colorBgLayout, height: "100vh" }}>
        <div>
          <Segmented
            onChange={(v) => setAppearance(v as any)}
            options={options}
          />
        </div>
        <Divider />
        <div>
          <Button
            onClick={async () => {
              await message.info("hello");
            }}
          >
            按钮
          </Button>
        </div>
      </div>
    </ConfigProvider>
  );
}
