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
    className: "feather feather-cloud-drizzle",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 8, y1: 19, x2: 8, y2: 21 }),
  h("line", { x1: 8, y1: 13, x2: 8, y2: 15 }),
  h("line", { x1: 16, y1: 19, x2: 16, y2: 21 }),
  h("line", { x1: 16, y1: 13, x2: 16, y2: 15 }),
  h("line", { x1: 12, y1: 21, x2: 12, y2: 23 }),
  h("line", { x1: 12, y1: 15, x2: 12, y2: 17 }),
  h("path", { d: "M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" })
);