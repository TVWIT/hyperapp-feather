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
    className: "feather feather-underline",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3M4 21h16" })
);