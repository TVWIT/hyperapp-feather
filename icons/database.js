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
    className: "feather feather-database",
    width: "1em",
    height: "1em"
  }, props),
  h("ellipse", { cx: 12, cy: 5, rx: 9, ry: 3 }),
  h("path", { d: "M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" }),
  h("path", { d: "M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" })
);