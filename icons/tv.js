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
    className: "feather feather-tv",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 2, y: 7, width: 20, height: 15, rx: 2, ry: 2 }),
  h("polyline", { points: "17 2 12 7 7 2" })
);