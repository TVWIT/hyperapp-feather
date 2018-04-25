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
    x: '1',
    y: '5',
    width: '22',
    height: '14',
    rx: '7',
    ry: '7',
}),
h('circle', {
    cx: '8',
    cy: '12',
    r: '3',
})
])