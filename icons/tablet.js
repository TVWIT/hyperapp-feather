const { h } = require('hyperapp')

module.exports = ({ size = 24, color = 'currentColor', weight = 2 }) => h('svg', {
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
    x: '4',
    y: '2',
    width: '16',
    height: '20',
    rx: '2',
    ry: '2',
    transform: 'rotate(180 12 12)',
}),
h('line', {
    x1: '12',
    y1: '18',
    x2: '12',
    y2: '18',
})
])