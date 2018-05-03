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
    className: "feather feather-codepen",
    width: "1em",
    height: "1em"
  }, props),
  h("polygon", { points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" }),
  h("line", { x1: 12, y1: 22, x2: 12, y2: 15.5 }),
  h("polyline", { points: "22 8.5 12 15.5 2 8.5" }),
  h("polyline", { points: "2 15.5 12 8.5 22 15.5" }),
  h("line", { x1: 12, y1: 2, x2: 12, y2: 8.5 })
);