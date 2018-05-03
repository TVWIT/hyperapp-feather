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
    className: "feather feather-map",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" }),
  h("line", { x1: 8, y1: 2, x2: 8, y2: 18 }),
  h("line", { x1: 16, y1: 6, x2: 16, y2: 22 })
);