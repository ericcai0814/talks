import { defineConfig } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: [
      'seedrandom',
      'vis-timeline',
    ],
  },
})