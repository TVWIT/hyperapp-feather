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
    className: "feather feather-menu",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 3, y1: 12, x2: 21, y2: 12 }),
  h("line", { x1: 3, y1: 6, x2: 21, y2: 6 }),
  h("line", { x1: 3, y1: 18, x2: 21, y2: 18 })
);