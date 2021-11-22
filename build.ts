import { build } from "esbuild"
import sveltePlugin from "esbuild-svelte"
import sveltePreprocess from "svelte-preprocess"

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "public/dist/bundle.js",
  plugins: [
    sveltePlugin({
      preprocess: sveltePreprocess(),
    }),
  ],
}).catch(() => {
  process.exit(1)
})
