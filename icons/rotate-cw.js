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
    className: "feather feather-rotate-cw",
    width: "1em",
    height: "1em"
  }, props),
  h("polyline", { points: "23 4 23 10 17 10" }),
  h("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" })
);