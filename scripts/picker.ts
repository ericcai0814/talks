#!/usr/bin/env esno

import { readdirSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import { execSync } from 'node:child_process'

const args = process.argv.slice(2)
const command = args[0] || 'dev'
const flags = args.slice(1)

// Get all date-based directories
const talks = readdirSync('.')
  .filter(dir => {
    const path = resolve(dir)
    return statSync(path).isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(dir)
  })
  .sort()
  .reverse() // Most recent first

if (talks.length === 0) {
  console.log('No talks found!')
  process.exit(1)
}

console.log('Available talks:')
talks.forEach((talk, index) => {
  console.log(`${index + 1}. ${talk}`)
})

// If only one talk, use it directly
let selectedTalk: string
if (talks.length === 1) {
  selectedTalk = talks[0]
  console.log(`\nUsing only available talk: ${selectedTalk}`)
} else {
  // For now, default to the most recent talk
  // In a full implementation, you'd want to prompt for selection
  selectedTalk = talks[0]
  console.log(`\nUsing most recent talk: ${selectedTalk}`)
}

const srcPath = resolve(selectedTalk, 'src')

console.log(`\nRunning: pnpm run ${command} ${flags.join(' ')} in ${srcPath}`)

try {
  execSync(`pnpm run ${command} ${flags.join(' ')}`, {
    cwd: srcPath,
    stdio: 'inherit'
  })
} catch (error) {
  console.error(`Failed to run command in ${srcPath}`)
  process.exit(1)
}