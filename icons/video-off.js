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
h('path', {
    d: 'M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10',
}),
h('line', {
    x1: '1',
    y1: '1',
    x2: '23',
    y2: '23',
})
])