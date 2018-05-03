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
    className: "feather feather-italic",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 19, y1: 4, x2: 10, y2: 4 }),
  h("line", { x1: 14, y1: 20, x2: 5, y2: 20 }),
  h("line", { x1: 15, y1: 4, x2: 9, y2: 20 })
);