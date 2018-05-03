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
    className: "feather feather-volume-x",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5" }),
  h("line", { x1: 23, y1: 9, x2: 17, y2: 15 }),
  h("line", { x1: 17, y1: 9, x2: 23, y2: 15 })
);