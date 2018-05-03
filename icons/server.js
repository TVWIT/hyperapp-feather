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
    className: "feather feather-server",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 2, y: 2, width: 20, height: 8, rx: 2, ry: 2 }),
  h("rect", { x: 2, y: 14, width: 20, height: 8, rx: 2, ry: 2 }),
  h("line", { x1: 6, y1: 6, x2: 6, y2: 6 }),
  h("line", { x1: 6, y1: 18, x2: 6, y2: 18 })
);