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
    className: "feather feather-corner-down-right",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "15 10 20 15 15 20" }),
  h("path", { d: "M4 4v7a4 4 0 0 0 4 4h12" })
);