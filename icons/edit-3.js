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
    className: "feather feather-edit-3",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "14 2 18 6 7 17 3 17 3 13 14 2" }),
  h("line", { x1: 3, y1: 22, x2: 21, y2: 22 })
);