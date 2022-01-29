/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const reactRefresh = require("@vitejs/plugin-react-refresh");
const reactSvgPlugin = require("vite-plugin-react-svg");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), reactSvgPlugin(), react()],
});
