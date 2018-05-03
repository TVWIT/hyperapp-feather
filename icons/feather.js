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
    className: "feather feather-feather",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" }),
  h("line", { x1: 16, y1: 8, x2: 2, y2: 22 }),
  h("line", { x1: 17, y1: 15, x2: 9, y2: 15 })
);