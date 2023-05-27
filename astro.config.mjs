import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://projetomuseuuni.github.io",
  base: "/qr-code",
  integrations: [react()],
});
