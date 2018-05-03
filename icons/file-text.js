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
    className: "feather feather-file-text",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
  h("polyline", { points: "14 2 14 8 20 8" }),
  h("line", { x1: 16, y1: 13, x2: 8, y2: 13 }),
  h("line", { x1: 16, y1: 17, x2: 8, y2: 17 }),
  h("polyline", { points: "10 9 9 9 8 9" })
);