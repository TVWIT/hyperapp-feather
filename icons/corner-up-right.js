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
    className: "feather feather-corner-up-right",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "15 14 20 9 15 4" }),
  h("path", { d: "M4 20v-7a4 4 0 0 1 4-4h12" })
);