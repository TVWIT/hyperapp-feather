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
    className: "feather feather-share",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
  h("polyline", { points: "16 6 12 2 8 6" }),
  h("line", { x1: 12, y1: 2, x2: 12, y2: 15 })
);