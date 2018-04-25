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
h('circle', {
    cx: '12',
    cy: '12',
    r: '1',
}),
h('circle', {
    cx: '19',
    cy: '12',
    r: '1',
}),
h('circle', {
    cx: '5',
    cy: '12',
    r: '1',
})
])