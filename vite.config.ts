import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

// A simple plugin to serve and copy root assets
function rootAssetsPlugin() {
  return {
    name: "root-assets-plugin",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || "";
        const match = url.match(/^\/(logo\.jpg|interior\.png|drink\.png|dish\d\.png)(\?.*)?$/);
        if (match) {
          const filePath = path.resolve(server.config.root, match[1]);
          if (fs.existsSync(filePath)) {
            res.setHeader("Content-Type", match[1].endsWith(".jpg") ? "image/jpeg" : "image/png");
            fs.createReadStream(filePath).pipe(res);
            return;
          }
        }
        next();
      });
    },
    closeBundle() {
      const images = [
        "logo.jpg",
        "interior.png",
        "drink.png",
        "dish1.png",
        "dish2.png",
        "dish3.png",
        "dish4.png",
        "dish5.png",
        "dish6.png",
        "dish9.png",
      ];
      const outDir = path.resolve(process.cwd(), "dist/client");
      if (fs.existsSync(path.resolve(process.cwd(), "dist"))) {
        images.forEach((img) => {
          const srcPath = path.resolve(process.cwd(), img);
          if (fs.existsSync(srcPath)) {
            fs.mkdirSync(outDir, { recursive: true });
            fs.copyFileSync(srcPath, path.resolve(outDir, img));
          }
        });
      }
    },
  };
}

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tanstackStart({
      server: {
        entry: "src/server.ts",
      },
    }),
    react(),
    netlify(),
    rootAssetsPlugin(),
    tailwindcss(),
  ],
});
