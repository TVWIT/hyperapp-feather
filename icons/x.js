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
    className: "feather feather-x",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 18, y1: 6, x2: 6, y2: 18 }),
  h("line", { x1: 6, y1: 6, x2: 18, y2: 18 })
);