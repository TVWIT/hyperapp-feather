const { h } = require('hyperapp')

module.exports = props => h(
  "svg",
  Object.assign({
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-scissors",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 6, cy: 6, r: 3 }),
  h("circle", { cx: 6, cy: 18, r: 3 }),
  h("path", { d: "M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" })
);