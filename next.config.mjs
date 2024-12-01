import analyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const noWrapper = (config) => config;

const withBundleAnalyzer =
  process.env.ANALYZE === "1" ? analyzer() : noWrapper;

export default withBundleAnalyzer(nextConfig);
