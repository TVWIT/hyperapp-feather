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
    className: "feather feather-align-right",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M21 10H7M21 6H3M21 14H3M21 18H7" })
);