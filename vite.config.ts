import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: { mode: string }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const clientEnv = {
    VITE_EMAILJS_SERVICE_ID: env.VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID: env.VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY: env.VITE_EMAILJS_PUBLIC_KEY,
  };

  return defineConfig({
    plugins: [react()],
    base: "/",
    define: {
      "process.env": JSON.stringify(clientEnv),
    },
  });
};