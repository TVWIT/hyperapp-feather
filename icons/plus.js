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
    className: "feather feather-plus",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 12, y1: 5, x2: 12, y2: 19 }),
  h("line", { x1: 5, y1: 12, x2: 19, y2: 12 })
);