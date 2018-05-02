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
    className: "feather feather-zoom-out",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 11, cy: 11, r: 8 }),
  h("path", { d: "M21 21l-4.35-4.35M8 11h6" })
);