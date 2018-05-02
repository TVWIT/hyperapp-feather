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
    className: "feather feather-unlock",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 3, y: 11, width: 18, height: 11, rx: 2, ry: 2 }),
  h("path", { d: "M7 11V7a5 5 0 0 1 9.9-1" })
);