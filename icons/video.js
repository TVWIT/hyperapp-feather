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
  h("path", { d: "M23 7l-7 5 7 5V7z" }),
  h("rect", { x: 1, y: 5, width: 15, height: 14, rx: 2, ry: 2 })
);