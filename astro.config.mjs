import analytics from '@codeworkslabs/astro-analytics';
import { analyticsOptions } from './analytics.config.mjs';
import { defineConfig } from "astro/config";
export default defineConfig({ integrations: [analytics(analyticsOptions)], site: "https://demo.codeworkslabs.dev" });
