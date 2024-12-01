"use client";

import { Button, Segmented, Divider, theme, message } from "antd";
import { useState } from "react";

const options = [
  { label: "亮色", value: "light" },
  { label: "暗色", value: "dark" },
];

export default function Home() {
  const [appearance, setAppearance] = useState("light");
  const { token } = theme.useToken();
  return (
    <div style={{ background: token.colorBgLayout, height: "100vh" }}>
      <div>
        <Segmented
          onChange={(value) => setAppearance(value)}
          options={options}
        />
      </div>
      <Divider />
      <div>
        <Button
          onClick={() => {
            message.success("hello");
          }}
        >
          按钮
        </Button>
      </div>
    </div>
  );
}
