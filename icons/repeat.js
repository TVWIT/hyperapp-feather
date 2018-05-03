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
    className: "feather feather-repeat",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "17 1 21 5 17 9" }),
  h("path", { d: "M3 11V9a4 4 0 0 1 4-4h14" }),
  h("polyline", { points: "7 23 3 19 7 15" }),
  h("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" })
);