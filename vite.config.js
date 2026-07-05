import { defineConfig } from 'vite';

// The design's section files reference React as a GLOBAL (window.React, set by the
// vendored UMD script in index.html). So we compile JSX to classic React.createElement
// calls and must NOT auto-inject an `import React` — that would pull a second, bundled
// React instance and break hooks. No @vitejs/plugin-react for the same reason.
export default defineConfig({
  esbuild: {
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
  },
  build: {
    target: 'es2019',
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
