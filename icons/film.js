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
    x: '2',
    y: '2',
    width: '20',
    height: '20',
    rx: '2.18',
    ry: '2.18',
}),
h('line', {
    x1: '7',
    y1: '2',
    x2: '7',
    y2: '22',
}),
h('line', {
    x1: '17',
    y1: '2',
    x2: '17',
    y2: '22',
}),
h('line', {
    x1: '2',
    y1: '12',
    x2: '22',
    y2: '12',
}),
h('line', {
    x1: '2',
    y1: '7',
    x2: '7',
    y2: '7',
}),
h('line', {
    x1: '2',
    y1: '17',
    x2: '7',
    y2: '17',
}),
h('line', {
    x1: '17',
    y1: '17',
    x2: '22',
    y2: '17',
}),
h('line', {
    x1: '17',
    y1: '7',
    x2: '22',
    y2: '7',
})
])