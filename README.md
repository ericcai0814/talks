# Talks

A collection of presentations built with [Slidev](https://github.com/slidevjs/slidev), following antfu's talks repository architecture.

## Quick Start

1. **Install dependencies**
   ```bash
   pnpm install
   ```

2. **Start development server**
   ```bash
   pnpm dev
   ```
   This will use the picker script to select and run the most recent talk.

3. **Build all presentations**
   ```bash
   pnpm build
   ```

## Available Talks

### 2025-07-28 - 前端測試進程報告與問題研討
Frontend Testing Progress Report & Discussion

- **Language:** 中文 (Chinese)
- **Topic:** 前端測試調查報告 - 從調查到共識的前端測試推進之路
- **PDF:** [2025-07-28-frontend-testing-zh.pdf](./2025-07-28-frontend-testing-zh.pdf)

## Development

- Each talk is organized in date-based folders (`YYYY-MM-DD/`)
- Use `pnpm dev` to start development server with talk selection
- Use `pnpm export` to export presentations to PDF
- Use `pnpm update` to generate Netlify redirects

Learn more about Slidev at the [documentation](https://sli.dev/).
