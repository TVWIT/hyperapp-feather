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
    className: "feather feather-minus-square",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2 }),
  h("path", { d: "M8 12h8" })
);