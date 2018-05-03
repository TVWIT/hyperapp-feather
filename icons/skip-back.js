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
    className: "feather feather-skip-back",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "19 20 9 12 19 4 19 20" }),
  h("line", { x1: 5, y1: 19, x2: 5, y2: 5 })
);