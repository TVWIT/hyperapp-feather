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
    className: "feather feather-crosshair",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 10 }),
  h("line", { x1: 22, y1: 12, x2: 18, y2: 12 }),
  h("line", { x1: 6, y1: 12, x2: 2, y2: 12 }),
  h("line", { x1: 12, y1: 6, x2: 12, y2: 2 }),
  h("line", { x1: 12, y1: 22, x2: 12, y2: 18 })
);