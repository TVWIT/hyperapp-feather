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
    className: "feather feather-corner-left-up",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "14 9 9 4 4 9" }),
  h("path", { d: "M20 20h-7a4 4 0 0 1-4-4V4" })
);