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
    className: "feather feather-award",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 8, r: 7 }),
  h("polyline", { points: "8.21 13.89 7 23 12 20 17 23 15.79 13.88" })
);