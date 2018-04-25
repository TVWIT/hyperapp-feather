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
    x: '3',
    y: '3',
    width: '7',
    height: '7',
}),
h('rect', {
    x: '14',
    y: '3',
    width: '7',
    height: '7',
}),
h('rect', {
    x: '14',
    y: '14',
    width: '7',
    height: '7',
}),
h('rect', {
    x: '3',
    y: '14',
    width: '7',
    height: '7',
})
])