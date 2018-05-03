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
    className: "feather feather-tablet",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", {
    x: 4,
    y: 2,
    width: 16,
    height: 20,
    rx: 2,
    ry: 2,
    transform: "rotate(180 12 12)"
  }),
  h("line", { x1: 12, y1: 18, x2: 12, y2: 18 })
);