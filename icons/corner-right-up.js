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
    className: "feather feather-corner-right-up",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "10 9 15 4 20 9" }),
  h("path", { d: "M4 20h7a4 4 0 0 0 4-4V4" })
);