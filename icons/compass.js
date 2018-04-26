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
    className: "feather feather-compass",
    width: "1em",
    height: "1em"
  }, props),
  h("circle", { cx: 12, cy: 12, r: 10 }),
  h("path", { d: "M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" })
);