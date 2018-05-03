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
    className: "feather feather-hash",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 4, y1: 9, x2: 20, y2: 9 }),
  h("line", { x1: 4, y1: 15, x2: 20, y2: 15 }),
  h("line", { x1: 10, y1: 3, x2: 8, y2: 21 }),
  h("line", { x1: 16, y1: 3, x2: 14, y2: 21 })
);