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
    className: "feather feather-chevrons-down",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M7 13l5 5 5-5M7 6l5 5 5-5" })
);