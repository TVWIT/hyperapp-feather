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
    className: "feather feather-corner-down-left",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "9 10 4 15 9 20" }),
  h("path", { d: "M20 4v7a4 4 0 0 1-4 4H4" })
);