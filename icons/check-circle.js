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
    className: "feather feather-check-circle",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
  h("path", { d: "M22 4L12 14.01l-3-3" })
);