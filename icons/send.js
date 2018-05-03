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
    className: "feather feather-send",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 22, y1: 2, x2: 11, y2: 13 }),
  h("polygon", { points: "22 2 15 22 11 13 2 9 22 2" })
);