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
    className: "feather feather-x",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M18 6L6 18M6 6l12 12" })
);