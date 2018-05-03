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
    className: "feather feather-trending-down",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "23 18 13.5 8.5 8.5 13.5 1 6" }),
  h("polyline", { points: "17 18 23 18 23 12" })
);