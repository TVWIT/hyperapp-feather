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
h('rect', {
    x: '3',
    y: '11',
    width: '18',
    height: '11',
    rx: '2',
    ry: '2',
}),
h('path', {
    d: 'M7 11V7a5 5 0 0 1 9.9-1',
})
])