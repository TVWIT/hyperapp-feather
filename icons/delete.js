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
    className: "feather feather-delete",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" }),
  h("line", { x1: 18, y1: 9, x2: 12, y2: 15 }),
  h("line", { x1: 12, y1: 9, x2: 18, y2: 15 })
);