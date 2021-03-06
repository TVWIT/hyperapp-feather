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
    className: "feather feather-corner-left-down",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "14 15 9 20 4 15" }),
  h("path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" })
);