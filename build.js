'use strict'

const fs = require('fs-extra')
const babel = require('babel-core')
const { promisify } = require('util')
const { default: svgr } = require('svgr')
const { join, basename, extname } = require('path')

const srcDir = join(__dirname, 'node_modules', 'feather-icons', 'dist', 'icons')
const destDir = join(__dirname, 'icons')

const getFiles = async path => {
  const paths = await fs.readdir(path).catch(() => [])
  const filepaths = paths.map(f => ({ name: f, path: join(path, f) }))
  const filesreq = await Promise.all(filepaths.map(async f => ({
    path: f.path,
    name: f.name,
    stats: await fs.stat(f.path).catch(() => emptyStat)
  })))

  return filesreq.filter(m => m.stats.isFile())
}

const yerAWizardHarry_imAWot = async ({ path, name }) => {
  console.log('processing:', name)

  const raw = await fs.readFile(path, 'utf8')
  const data = await svgr(raw, { icon: true, template: () => m => m }).catch(console.error)

  const { code } = babel.transform(data, { plugins: [
    [ require('babel-plugin-transform-react-jsx'), {
      pragma: 'h',
      useBuiltIns: true,
    } ]
  ] })

  const moduleSrc =  `const { h } = require('hyperapp')

module.exports = props => ${code}`

  const justName = basename(name, extname(name))
  const pathName = `${justName}.js`
  const moduleName = justName[0].toUpperCase() + justName.slice(1).replace(/-(.)/g, (_, $1) => $1.toUpperCase())

  await fs.writeFile(join(destDir, pathName), moduleSrc)
  return { pathName, moduleName }
}

const requireModules = names => names.map(({ pathName, moduleName }) => {
  return `  ${moduleName}: require('./icons/${pathName}')`
}).join(',\n')

const typingsNames = names => names.map(({ moduleName }) => {
  return `export declare const ${moduleName}: (params?: object | undefined) => Component<{}, {}, {}>;`
}).join('\n')

const main = async () => {
  await fs.ensureDir(destDir)

  console.log('BUILDING FEATHER ICONS')

  const iconPaths = await getFiles(srcDir)
  if (!iconPaths.length) return console.error('something went wrong, no icons found. wat')

  console.log(`found ${iconPaths.length} icons...`)

  const names = await Promise.all(iconPaths.map(yerAWizardHarry_imAWot))

  console.log('writing main.js module file')
  const mainModuleSource = `'use strict'
module.exports = {
${requireModules(names)}
}`

  const mainFile = join(__dirname, 'main.js')
  await fs.writeFile(mainFile, mainModuleSource)

  const typingsSource = `import { Component } from 'hyperapp'
${typingsNames(names)}`

  console.log('writing typescript typings file')
  const typingsFile = join(__dirname, 'main.d.ts')
  await fs.writeFile(typingsFile, typingsSource)

  console.log('DONE!')
  console.log('if you enjoyed this process, consider running it again for teh luls')
}

main().catch(console.error)
