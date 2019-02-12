**this was forked to fix the build process so it produces es2015 syntax. this package will be obsolete in the future b/c hyperapp will be replaced with preact**

# hyperapp feather icons

**simply beautiful feather SVG icons as hyperapp components**

feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.

https://feathericons.com

**+typescript typings**

### install
`npm install hyperapp-feather`

### use

```javascript
const { Camera } = require('hyperapp-feather')

module.exports = () => h('div', [
  ,h('p', 'say cheese!')
  ,h(Camera)
])
```

### configure

```javascript
const { Camera } = require('hyperapp-feather')

module.exports = () => ,h(Camera, {
  style: { fontSize: '1.8rem' }
}, {
  color: 'red',
  'stroke-width': 2,
})
```
