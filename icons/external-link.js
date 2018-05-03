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
    className: "feather feather-external-link",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
  h("polyline", { points: "15 3 21 3 21 9" }),
  h("line", { x1: 10, y1: 14, x2: 21, y2: 3 })
);