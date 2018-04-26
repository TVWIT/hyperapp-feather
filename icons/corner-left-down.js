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
    className: "feather feather-corner-left-down",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M14 15l-5 5-5-5" }),
  h("path", { d: "M20 4h-7a4 4 0 0 0-4 4v12" })
);