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
    className: "feather feather-chrome",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 10 }),
  h("circle", { cx: 12, cy: 12, r: 4 }),
  h("line", { x1: 21.17, y1: 8, x2: 12, y2: 8 }),
  h("line", { x1: 3.95, y1: 6.06, x2: 8.54, y2: 14 }),
  h("line", { x1: 10.88, y1: 21.94, x2: 15.46, y2: 14 })
);