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
    className: "feather feather-film",
    width: "1em",
    height: "1em"
  }, props),
  h("rect", { x: 2, y: 2, width: 20, height: 20, rx: 2.18, ry: 2.18 }),
  h("line", { x1: 7, y1: 2, x2: 7, y2: 22 }),
  h("line", { x1: 17, y1: 2, x2: 17, y2: 22 }),
  h("line", { x1: 2, y1: 12, x2: 22, y2: 12 }),
  h("line", { x1: 2, y1: 7, x2: 7, y2: 7 }),
  h("line", { x1: 2, y1: 17, x2: 7, y2: 17 }),
  h("line", { x1: 17, y1: 17, x2: 22, y2: 17 }),
  h("line", { x1: 17, y1: 7, x2: 22, y2: 7 })
);