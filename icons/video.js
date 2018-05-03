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
    className: "feather feather-video",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "23 7 16 12 23 17 23 7" }),
  h("rect", { x: 1, y: 5, width: 15, height: 14, rx: 2, ry: 2 })
);