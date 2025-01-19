import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    remarkRehype: {
      footnoteLabel: "Footnotes",
      footnoteLabelProperties: { className: ["sr-only"] },
      footnoteBackContent: "↩",
    },
    rehypePlugins: [[rehypeExternalLinks, { target: "_blank" }]],
  },
});
