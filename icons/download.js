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
    className: "feather feather-download",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
  h("polyline", { points: "7 10 12 15 17 10" }),
  h("line", { x1: 12, y1: 15, x2: 12, y2: 3 })
);