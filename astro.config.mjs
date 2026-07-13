import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://mariomolina.dev",
  adapter: cloudflare(),
  integrations: [sitemap()],
});