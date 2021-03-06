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
    className: "feather feather-arrow-down-left",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 17, y1: 7, x2: 7, y2: 17 }),
  h("polyline", { points: "17 17 7 17 7 7" })
);