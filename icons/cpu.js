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
    className: "feather feather-cpu",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 4, y: 4, width: 16, height: 16, rx: 2, ry: 2 }),
  h("rect", { x: 9, y: 9, width: 6, height: 6 }),
  h("line", { x1: 9, y1: 1, x2: 9, y2: 4 }),
  h("line", { x1: 15, y1: 1, x2: 15, y2: 4 }),
  h("line", { x1: 9, y1: 20, x2: 9, y2: 23 }),
  h("line", { x1: 15, y1: 20, x2: 15, y2: 23 }),
  h("line", { x1: 20, y1: 9, x2: 23, y2: 9 }),
  h("line", { x1: 20, y1: 14, x2: 23, y2: 14 }),
  h("line", { x1: 1, y1: 9, x2: 4, y2: 9 }),
  h("line", { x1: 1, y1: 14, x2: 4, y2: 14 })
);