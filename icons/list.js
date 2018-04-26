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
    className: "feather feather-list",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M8 6h13M8 12h13M8 18h13M3 18" })
);