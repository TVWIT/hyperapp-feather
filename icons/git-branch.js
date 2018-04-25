const { h } = require('hyperapp')

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
h('line', {
    x1: '6',
    y1: '3',
    x2: '6',
    y2: '15',
}),
h('circle', {
    cx: '18',
    cy: '6',
    r: '3',
}),
h('circle', {
    cx: '6',
    cy: '18',
    r: '3',
}),
h('path', {
    d: 'M18 9a9 9 0 0 1-9 9',
})
])