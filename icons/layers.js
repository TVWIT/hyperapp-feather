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
    className: "feather feather-layers",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "12 2 2 7 12 12 22 7 12 2" }),
  h("polyline", { points: "2 17 12 22 22 17" }),
  h("polyline", { points: "2 12 12 17 22 12" })
);