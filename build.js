'use strict'

const { readFile, writeFile, readdir, ensureDir, stat } = require('fs-extra')
const { join, basename, extname } = require('path')
const babel = require('babel-core')
const j = require('jscodeshift')
const fs = require('fs')

const getDirFiles = async path => {
  const paths = await readdir(path).catch(() => [])
  const filepaths = paths.map(f => ({ name: f, path: join(path, f) }))
  const filesreq = await Promise.all(filepaths.map(async f => ({
    path: f.path,
    name: f.name,
    stats: await stat(f.path).catch(() => emptyStat)
  })))
  return filesreq
    .map(({ name, path, stats }) => ({ name, path, dir: stats.isDirectory(), file: stats.isFile() }))
    .filter(m => m.dir || m.file)
}

const srcDir = join(__dirname, './node_modules/feather-icons/dist/icons')
const destDir = join(__dirname, 'icons')

const yerAWizardHarryAWot = async thing => {
  const data = await readFile(thing.path, 'utf8')

  console.log('processing', thing.name)

  const { ast } = babel.transform(data, { plugins: ['transform-react-jsx'] })
  const args = ast.program.body[0].expression.arguments.slice(2)
  const mods = j(args).toSource({ quote: 'single', trailingComma: true })
  const stuff = Array.isArray(mods) ? mods : [ mods ]
  const children = stuff
    .map(m => m.replace(/React.createElement/g, 'h'))
    .join(',\n')

  const res = `const { h } = require('hyperapp')

module.exports = ({ size = 24, color = 'currentColor', weight = 2 } = {}) => h('svg', {
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: color,
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round',
  'stroke-width': weight + '',
}, [
${children}
])`

  const destPath = join(destDir, thing.name.replace('svg', 'js'))
  await writeFile(destPath, res)
  console.log('saved', destPath)
}

const getModuleNames = iconPaths => iconPaths
  .map(p => basename(p.name, extname(p.name)))
  .map(name => ({
    filename: name,
    name: name[0].toUpperCase() + name.slice(1).replace(/-(.)/g, (_, $1) => $1.toUpperCase())
  }))

const requireModules = names => names.map(({ filename, name }) => {
  return `  ${name}: require('./icons/${filename}.js')`
}).join(',\n')

const main = async () => {
  console.log('BUILDING FEATHER ICONS')

  const iconPaths = (await getDirFiles(srcDir)).filter(m => m.file)
  if (!iconPaths.length) return console.error('something went wrong, no icons found. wat')

  console.log(`found ${iconPaths.length} icons...`)

  await ensureDir(destDir)
  await Promise.all(iconPaths.map(yerAWizardHarryAWot))

  console.log('writing main.js module file')
  const names = getModuleNames(iconPaths)

  const mainModuleSource = `'use strict'
module.exports = {
${requireModules(names)}
}`

  const mainFile = join(__dirname, 'main.js')
  await writeFile(mainFile, mainModuleSource)

  // TODO: build typings file

  console.log('if you enjoyed this process, consider running it again for teh luls')
}

main().catch(console.error)
