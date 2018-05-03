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
    className: "feather feather-sliders",
    width: "1em",
    height: "1em"
  }, props),
  h("line", { x1: 4, y1: 21, x2: 4, y2: 14 }),
  h("line", { x1: 4, y1: 10, x2: 4, y2: 3 }),
  h("line", { x1: 12, y1: 21, x2: 12, y2: 12 }),
  h("line", { x1: 12, y1: 8, x2: 12, y2: 3 }),
  h("line", { x1: 20, y1: 21, x2: 20, y2: 16 }),
  h("line", { x1: 20, y1: 12, x2: 20, y2: 3 }),
  h("line", { x1: 1, y1: 14, x2: 7, y2: 14 }),
  h("line", { x1: 9, y1: 8, x2: 15, y2: 8 }),
  h("line", { x1: 17, y1: 16, x2: 23, y2: 16 })
);