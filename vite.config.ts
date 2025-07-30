import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: [
      'seedrandom',
      'vis-timeline',
      'chroma-js',
      'vis-network',
      'vis-data',
    ],
  },
})