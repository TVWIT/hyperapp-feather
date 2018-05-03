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
    className: "feather feather-corner-right-down",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "10 15 15 20 20 15" }),
  h("path", { d: "M4 4h7a4 4 0 0 1 4 4v12" })
);