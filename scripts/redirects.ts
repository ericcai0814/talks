#!/usr/bin/env esno

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

// Generate Netlify redirects based on talk directories
function generateRedirects() {
  const talks = readdirSync('.')
    .filter(dir => /^\d{4}-\d{2}-\d{2}$/.test(dir))
    .sort()

  const redirects: string[] = []

  for (const talk of talks) {
    const srcPath = join(talk, 'src')
    const packageJsonPath = join(srcPath, 'package.json')
    
    try {
      const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
      const buildScript = packageJson.scripts?.build
      
      if (buildScript) {
        // Extract base path from build script
        const baseMatch = buildScript.match(/--base\s+([^\s]+)/)
        if (baseMatch) {
          const basePath = baseMatch[1]
          const year = talk.split('-')[0]
          
          // Add redirects for common patterns
          redirects.push(`/${year}/${talk} ${basePath} 302`)
          redirects.push(`/${talk} ${basePath} 302`)
          
          // PDF redirect
          const pdfFiles = readdirSync('.').filter(f => f.startsWith(talk) && f.endsWith('.pdf'))
          if (pdfFiles.length > 0) {
            redirects.push(`${basePath}/pdf /${pdfFiles[0]} 302`)
          }
        }
      }
    } catch (error) {
      console.warn(`Could not process ${talk}: ${error}`)
    }
  }

  return redirects
}

function updateNetlifyToml() {
  const redirects = generateRedirects()
  
  if (redirects.length === 0) {
    console.log('No redirects generated')
    return
  }

  const netlifyTomlPath = 'netlify.toml'
  let content = ''
  
  try {
    content = readFileSync(netlifyTomlPath, 'utf-8')
  } catch (error) {
    // File doesn't exist, create basic structure
    content = `[build]
publish = "dist"

`
  }

  // Remove existing redirects section
  content = content.replace(/\[\[redirects\]\]\n([^[]*\n?)*/g, '')

  // Add new redirects
  const redirectsSection = redirects.map(redirect => `[[redirects]]
from = "${redirect.split(' ')[0]}"
to = "${redirect.split(' ')[1]}"
status = ${redirect.split(' ')[2]}
`).join('\n')

  content += '\n' + redirectsSection

  writeFileSync(netlifyTomlPath, content)
  console.log(`Updated ${netlifyTomlPath} with ${redirects.length} redirects`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  updateNetlifyToml()
}