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
    className: "feather feather-skip-forward",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "5 4 15 12 5 20 5 4" }),
  h("line", { x1: 19, y1: 5, x2: 19, y2: 19 })
);