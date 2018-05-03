const { h } = require('hyperapp')

module.exports = props => h(
  "svg",
  Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    'stroke-width': 2,
    'stroke-linecap': "round",
    'stroke-linejoin': "round",
    className: "feather feather-monitor",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 2, y: 3, width: 20, height: 14, rx: 2, ry: 2 }),
  h("line", { x1: 8, y1: 21, x2: 16, y2: 21 }),
  h("line", { x1: 12, y1: 17, x2: 12, y2: 21 })
);