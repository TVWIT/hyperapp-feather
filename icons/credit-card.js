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
    className: "feather feather-credit-card",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 1, y: 4, width: 22, height: 16, rx: 2, ry: 2 }),
  h("line", { x1: 1, y1: 10, x2: 23, y2: 10 })
);