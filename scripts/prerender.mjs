import { mkdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { build } from "vite";

await build({
  publicDir: false,
  build: {
    ssr: "src/entry-server.tsx",
    outDir: ".cache/prerender",
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
  },
});

const { render } = await import("../.cache/prerender/entry-server.mjs");
const template = await readFile("build/index.html", "utf8");
await writeFile("build/404.html", template);

for (const prefix of ["", "/ko"]) {
  for (const page of ["/", "/resume/", "/printable/"]) {
    const pathname = `${prefix}${page}`;
    const { html, styles, language } = await render(pathname);
    const output = template
      .replace('lang="en"', () => `lang="${language}"`)
      .replace("<!--app-html-->", () => html)
      .replace("</head>", () => `${styles}</head>`);
    const directory = join("build", pathname);
    await mkdir(directory, { recursive: true });
    await writeFile(join(directory, "index.html"), output);
    console.log(`Prerendered ${pathname} (${language})`);
  }
}
