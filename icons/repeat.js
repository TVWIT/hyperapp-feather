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
    className: "feather feather-repeat",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M17 1l4 4-4 4" }),
  h("path", { d: "M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4" }),
  h("path", { d: "M21 13v2a4 4 0 0 1-4 4H3" })
);