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
    className: "feather feather-rotate-ccw",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M1 4v6h6" }),
  h("path", { d: "M3.51 15a9 9 0 1 0 2.13-9.36L1 10" })
);