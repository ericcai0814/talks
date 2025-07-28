import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  react: false,
  pnpm: true,
  formatters: {
    css: true,
  },
  ignores: [
    '**/dist/**',
    '**/node_modules/**',
  ],
})