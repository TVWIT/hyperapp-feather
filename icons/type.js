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
    className: "feather feather-type",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "4 7 4 4 20 4 20 7" }),
  h("line", { x1: 9, y1: 20, x2: 15, y2: 20 }),
  h("line", { x1: 12, y1: 4, x2: 12, y2: 20 })
);