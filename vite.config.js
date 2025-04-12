import path from "path";
import framework7 from "rollup-plugin-framework7";
import { VitePWA } from "vite-plugin-pwa";

const SRC_DIR = path.resolve(__dirname, "./src");
const PUBLIC_DIR = path.resolve(__dirname, "./public");
const BUILD_DIR = path.resolve(__dirname, "./www");

export default async () => {
  return {
    plugins: [
      framework7({ emitCss: false }),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.png",
          "icons/icon-192x192.png",
          "icons/icon-512x512.png",
        ],
        manifest: {
          name: "Petal Frame",
          short_name: "PetalFrame",
          start_url: "/",
          display: "standalone",
          background_color: "#ffffff",
          theme_color: "#35a9d2",
          icons: [
            {
              src: "icons/icon-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "icons/icon-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
          ],
        },
      }),
    ],
    root: SRC_DIR,
    base: "",
    publicDir: PUBLIC_DIR,
    build: {
      outDir: BUILD_DIR,
      assetsInlineLimit: 0,
      emptyOutDir: true,
      rollupOptions: {
        treeshake: false,
      },
    },
    resolve: {
      alias: {
        "@": SRC_DIR,
      },
    },
    css: {},
    server: {
      host: true,
    },
    esbuild: {
      jsxFactory: "$jsx",
      jsxFragment: '"Fragment"',
    },
  };
};
