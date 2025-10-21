import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Evangadi-menu/", // <-- MUST be at the top level, not under server
  server: {
    port: 3000,
  },
});
