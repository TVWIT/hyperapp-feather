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
    className: "feather feather-volume-x",
    width: "1em",
    height: "1em"
  }, props),
  h("path", { d: "M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" })
);