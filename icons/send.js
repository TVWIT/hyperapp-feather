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
    x1: '22',
    y1: '2',
    x2: '11',
    y2: '13',
}),
h('polygon', {
    points: '22 2 15 22 11 13 2 9 22 2',
})
])