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
    className: "feather feather-scissors",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 6, cy: 6, r: 3 }),
  h("circle", { cx: 6, cy: 18, r: 3 }),
  h("line", { x1: 20, y1: 4, x2: 8.12, y2: 15.88 }),
  h("line", { x1: 14.47, y1: 14.48, x2: 20, y2: 20 }),
  h("line", { x1: 8.12, y1: 8.12, x2: 12, y2: 12 })
);