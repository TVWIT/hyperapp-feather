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
    className: "feather feather-trash-2",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "3 6 5 6 21 6" }),
  h("path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
  h("line", { x1: 10, y1: 11, x2: 10, y2: 17 }),
  h("line", { x1: 14, y1: 11, x2: 14, y2: 17 })
);