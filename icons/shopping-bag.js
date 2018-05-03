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
    className: "feather feather-shopping-bag",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" }),
  h("line", { x1: 3, y1: 6, x2: 21, y2: 6 }),
  h("path", { d: "M16 10a4 4 0 0 1-8 0" })
);