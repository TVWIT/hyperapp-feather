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
    className: "feather feather-chrome",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 10 }),
  h("circle", { cx: 12, cy: 12, r: 4 }),
  h("path", { d: "M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14" })
);