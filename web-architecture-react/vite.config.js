import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 倉庫名稱（只有推到 gh-pages 時才用到）
const REPO_NAME = 'web-tutorial'

// Vercel 部署時環境變數 VERCEL=1 → base 用 '/'
// GitHub Pages 手動部署時設 GITHUB_PAGES=true → base 用 '/web-tutorial/'
// 本機開發 → base 用 '/'
const base = process.env.VERCEL
  ? '/'
  : process.env.GITHUB_PAGES === 'true'
    ? `/${REPO_NAME}/`
    : '/'

export default defineConfig({
  plugins: [react()],
  base,
})
