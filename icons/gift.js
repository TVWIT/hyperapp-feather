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
    className: "feather feather-gift",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "20 12 20 22 4 22 4 12" }),
  h("rect", { x: 2, y: 7, width: 20, height: 5 }),
  h("line", { x1: 12, y1: 22, x2: 12, y2: 7 }),
  h("path", { d: "M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" }),
  h("path", { d: "M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" })
);