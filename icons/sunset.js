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
    className: "feather feather-sunset",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M17 18a5 5 0 0 0-10 0" }),
  h("line", { x1: 12, y1: 9, x2: 12, y2: 2 }),
  h("line", { x1: 4.22, y1: 10.22, x2: 5.64, y2: 11.64 }),
  h("line", { x1: 1, y1: 18, x2: 3, y2: 18 }),
  h("line", { x1: 21, y1: 18, x2: 23, y2: 18 }),
  h("line", { x1: 18.36, y1: 11.64, x2: 19.78, y2: 10.22 }),
  h("line", { x1: 23, y1: 22, x2: 1, y2: 22 }),
  h("polyline", { points: "16 5 12 9 8 5" })
);